# Steps to Pull the Changes — `LearningPlaywright3x` → local workspace

Repeatable procedure to bring new files from
<https://github.com/PramodDutta/LearningPlaywright3x> into
`C:\Users\Hp\Desktop\Shashi_playwright\Learnings\LearnPlaywright3x_JS`, **skipping duplicate files**.

> Companion notes for the 2026-10-11 run: [`notes_prompt.md`](./notes_prompt.md).

---

## What this does

1. Clones the latest `LearningPlaywright3x` repo to a temp folder.
2. Builds a list of filenames that already exist at the **top level** of the workspace.
   The `LearnPlaywright3x_JS_class_notes/` mirror, `.commandcode/` and `.git/` are **ignored** when
   building that list, so the comparison targets your top-level chapters.
3. Copies every repo file whose filename is **not** already present, recreating the repo's folder layout.
4. Reports how many files were copied and how many were skipped.

**Duplicate = same filename.** A file is skipped if a same-named file already exists at the top level.

---

## Prerequisites

- Windows PowerShell (5.1 or PowerShell 7).
- `git` on `PATH`.
- Network access to GitHub.

---

## Option A — Run the script (recommended)

Save the block below as `sync_playwright_repo.ps1` (anywhere) and run it:

```powershell
# sync_playwright_repo.ps1
# Pull new files from the class repo into the local workspace, skipping duplicate filenames.

$Repo  = "https://github.com/PramodDutta/LearningPlaywright3x.git"
$Local = "C:\Users\Hp\Desktop\Shashi_playwright\Learnings\LearnPlaywright3x_JS"
$Tmp   = Join-Path $env:TEMP "LearningPlaywright3x_sync"

# 1. Fresh clone (remove any previous temp clone)
if (Test-Path $Tmp) { Remove-Item $Tmp -Recurse -Force }
git clone --depth 1 $Repo $Tmp

# 2. Filenames already present at the TOP LEVEL (ignore the class_notes mirror, .commandcode, .git)
$topBase = Get-ChildItem -Path $Local -Recurse -File -Force |
  Where-Object { $_.FullName -notmatch '\\\.commandcode\\' -and
                 $_.FullName -notmatch '\\LearnPlaywright3x_JS_class_notes\\' -and
                 $_.FullName -notmatch '\\\.git\\' } |
  ForEach-Object { $_.Name.ToLower() } | Sort-Object -Unique

# 3. Copy only the non-duplicate files, keeping the repo's folder layout
$copied = 0; $skipped = 0
Get-ChildItem -Path $Tmp -Recurse -File -Force |
  Where-Object { $_.FullName -notmatch '\\\.git\\' -and $_.FullName -notmatch '\\\.commandcode\\' } |
  ForEach-Object {
    if ($topBase -contains $_.Name.ToLower()) { $skipped++; return }
    $rel  = $_.FullName.Substring($Tmp.Length + 1)
    $dest = Join-Path $Local $rel
    New-Item -ItemType Directory -Path (Split-Path -Parent $dest) -Force | Out-Null
    Copy-Item -LiteralPath $_.FullName -Destination $dest
    $copied++
  }

Write-Output "Copied: $copied   Skipped (duplicates): $skipped"
```

Then run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\sync_playwright_repo.ps1
```

Expected on a first run against the current repo: `Copied: 214   Skipped (duplicates): 36`.
Re-running right after is safe — the second run copies **0** (everything is now a duplicate).

---

## Option B — Manual steps

```powershell
# 1. Clone the repo somewhere temporary
git clone --depth 1 https://github.com/PramodDutta/LearningPlaywright3x.git "$env:TEMP\LearningPlaywright3x_sync"

# 2. List top-level filenames you already have (exclude the mirror + tooling)
$Local = "C:\Users\Hp\Desktop\Shashi_playwright\Learnings\LearnPlaywright3x_JS"
Get-ChildItem $Local -Recurse -File -Force |
  Where-Object { $_.FullName -notmatch '\\\.commandcode\\' -and
                 $_.FullName -notmatch '\\LearnPlaywright3x_JS_class_notes\\' } |
  Select-Object -ExpandProperty Name | Sort-Object -Unique

# 3. Copy the repo files you want, skipping the names listed in step 2.
```

---

## Option C — If you only want to refresh the `class_notes` mirror

`LearnPlaywright3x_JS_class_notes/` is already a git clone of this repo, so a plain pull keeps it current:

```powershell
git -C "C:\Users\Hp\Desktop\Shashi_playwright\Learnings\LearnPlaywright3x_JS\LearnPlaywright3x_JS_class_notes" pull --ff-only
```

---

## Verify

- Re-run the script: `Copied: 0` means there is nothing new left.
- Check the log line counts: copies + skips should equal the repo's total file count.
- Spot-check a couple of new folders, e.g. `07_chapter_switch/` and `30_Typescript_Abstract_Class/`.

---

## Caveats

- **Filename-only dedup.** If a repo file keeps its name but changes *content*, it will be skipped and your
  local copy stays as-is. Delete the local file first (or compare manually) if you want the repo version.
  Known case: `IQ_notes/Source_Code_ByteCODE_Binary_IQ.md` differs from the repo's
  `IQ_Notes/Source_Code_ByteCODE_Binary_IQ.md`.
- **Folder names follow the repo.** New chapters are created with the repo's exact names (e.g.
  `06_chapter_Statement`), which can differ in spelling/casing from your existing folders (e.g.
  `05_chapter_operators`). Merge them by hand if you want a single convention.
- **Nothing existing is overwritten** — only new filenames are written.
