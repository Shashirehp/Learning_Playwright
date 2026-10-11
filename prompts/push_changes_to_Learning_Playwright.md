# Push Notes — local workspace → `Shashirehp/Learning_Playwright`

**Date:** 2026-10-11
**Task:** Push the workspace's new learning material to
<https://github.com/Shashirehp/Learning_Playwright>, **excluding files that already exist in the repo**
and **excluding `Coding_Practice(tasks)_Java`**. The prompt and steps are recorded here.

---

## 0. Prompt (what was asked)

> push the changes to this repo https://github.com/Shashirehp/Learning_Playwright , and exclude the files
> which are already exist in the repo and exclude this folder
> `c:\Users\Hp\Desktop\Shashi_playwright\Learnings\LearnPlaywright3x_JS\Coding_Practice(tasks)_Java`
> and store the prompt and steps in `.md` file in `prompts` folder

---

## 1. Target & rules

| Item | Value |
|---|---|
| Remote repo | `https://github.com/Shashirehp/Learning_Playwright` |
| Branch | `main` |
| Local workspace | `C:\Users\Hp\Desktop\Shashi_playwright\Learnings\LearnPlaywright3x_JS` |
| Excluded folder | `Coding_Practice(tasks)_Java/` |
| Also ignored | `.commandcode/`, `LearnPlaywright3x_JS_class_notes/` (mirror clone), `.git/` |
| Nested duplicate ignored | `05_chapter_operators/05_chapter_Operators/` (files already exist flat at `05_chapter_operators/`) |
| Dedup rule | **skip any local file whose relative path already exists in the repo** |

---

## 2. Flow

```
local workspace                       remote repo (clone)
   │                                        │
   │  enumerate files                       │  build set of tracked relative paths
   │  (minus exclusions)                    │
   └──────────────► compare ◄───────────────┘
                     │
        path already in repo? ──yes──► SKIP (already exists)
                     │
                     no
                     ▼
              copy into clone ──► git add ──► commit ──► push origin main
```

---

## 3. Result (this run)

| Metric | Count |
|---|---:|
| Local files scanned (after exclusions) | 275 |
| Skipped — already exist in the repo | 32 |
| Skipped — nested `05_chapter_Operators/` duplicates | 24 |
| **Copied / new** | **219** |

### What was copied (219)

| Top-level path | Files |
|---|---:|
| `00_chaptet_GENAI` | 1 |
| `00_gen_AI/Product Requirements Document (PRD) VWO.com.pdf` | 1 |
| `01_chapter_Javascript` | 1 |
| `06_chapter_Statement` | 3 |
| `07_chapter_switch` | 9 |
| `08_chapter_UserInputs` | 5 |
| `09_chapter_Loops` | 12 |
| `10_chapter_Arrays` | 16 |
| `11_chapter_Funtions` | 26 |
| `12_chapter_Fn_Closure` | 5 |
| `13_String` | 8 |
| `14_Objects` | 6 |
| `15_Multi_Dimensions_Array` | 6 |
| `16_Callback` | 8 |
| `17_Promise` | 10 |
| `18_Async_Await` | 9 |
| `19_Export_Import` | 7 |
| `20_Class_Object_OOPs` | 11 |
| `21_OOPs_Ecapsulation` | 7 |
| `22_OOPs_Inheritance` | 11 |
| `23_OOPs_Polymorphism` | 2 |
| `24_OOPs_Interview` | 8 |
| `25_Typescript` | 12 |
| `26_OOPs_TS_Abstractions` | 10 |
| `27_Typescript_ENUM` | 5 |
| `28_Typescript_Generic` | 3 |
| `29_Typescript_PRIVATE_PUBLIC_PROTECTED` | 3 |
| `30_Typescript_Abstract_Class` | 1 |
| `IQ_notes` | 6 |
| `MCQ` | 1 |
| `prompts` | 3 |
| `README.md` (root) | 1 |
| `README_backup.md` (root) | 1 |
| `tsconfig.json` (root) | 1 |
| **Total** | **219** |

---

## 4. Repeatable steps

### Option A — script (recommended)

Save as `push_to_learning_playwright.ps1` and run. It clones the repo, copies only the
non-duplicate files, and reports counts (add `-Push` to also commit and push).

```powershell
param([switch]$Push)

$Repo  = "https://github.com/Shashirehp/Learning_Playwright.git"
$Local = "C:\Users\Hp\Desktop\Shashi_playwright\Learnings\LearnPlaywright3x_JS"
$Clone = Join-Path $env:TEMP "Learning_Playwright_push"

# 1. Fresh clone of the target repo
if (Test-Path $Clone) { Remove-Item $Clone -Recurse -Force }
git clone $Repo $Clone

# 2. Relative paths already tracked in the repo (lower-case, forward slashes)
$remote = @{}
Get-ChildItem $Clone -Recurse -File -Force |
    Where-Object { $_.FullName -notmatch '\\\.git\\' } |
    ForEach-Object { $remote[$_.FullName.Substring($Clone.Length + 1).Replace('\','/').ToLower()] = $true }

# 3. Local files, excluding tooling, the mirror clone, the Java folder and the nested Operators dup
$exclude = @('\.commandcode\\', '\\LearnPlaywright3x_JS_class_notes\\',
             '\\Coding_Practice\(tasks\)_Java\\', '\\\.git\\',
             '\\05_chapter_operators\\05_chapter_Operators\\')

$copied = 0; $skipped = 0
Get-ChildItem $Local -Recurse -File -Force |
    Where-Object { $p = $_.FullName; -not ($exclude | Where-Object { $p -match $_ }) } |
    ForEach-Object {
        $rel = $_.FullName.Substring($Local.Length + 1)
        if ($remote.ContainsKey($rel.Replace('\','/').ToLower())) { $script:skipped++; return }
        $dst = Join-Path $Clone $rel
        New-Item -ItemType Directory -Path (Split-Path -Parent $dst) -Force | Out-Null
        Copy-Item -LiteralPath $_.FullName -Destination $dst -Force
        $script:copied++
    }

Write-Output "Copied: $copied   Skipped (already exist): $skipped"

if ($Push) {
    git -C $Clone add -A
    git -C $Clone commit -m "Add JavaScript chapters 06-30, IQ notes, MCQ and prompts"
    git -C $Clone push origin main
}
```

Run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\push_to_learning_playwright.ps1 -Push
```

Re-running right after is safe — the second run copies **0** (everything is now a duplicate).

### Option B — manual

```powershell
# 1. Clone the target repo
git clone https://github.com/Shashirehp/Learning_Playwright.git "$env:TEMP\Learning_Playwright_push"

# 2. Copy only the folders/files you want, e.g.
#    chapters 06-30, IQ_notes, MCQ, prompts, README.md, tsconfig.json
#    (do NOT copy Coding_Practice(tasks)_Java, .commandcode, the class_notes mirror)

# 3. Commit and push
cd "$env:TEMP\Learning_Playwright_push"
git add -A
git commit -m "Add JavaScript chapters 06-30, IQ notes, MCQ and prompts"
git push origin main
```

---

## 5. Verify

- `git -C <clone> ls-remote origin main` should match the new local commit (`git rev-parse HEAD`).
- Re-run the script: `Copied: 0` means nothing new is left to push.
- Spot-check new chapters in the browser, e.g. `07_chapter_switch/`, `30_Typescript_Abstract_Class/`.

---

## 6. Caveats

- **Path-based dedup.** A file is skipped when the same relative path already exists in the repo, so a
  local file that changed *content* but kept its *name* is **not** re-pushed. Delete the remote file first
  (or push it deliberately) if you want the newer version.
- **Nested `05_chapter_Operators/`** is a local accidental duplicate of the flat `05_chapter_operators/*.js`
  files and is excluded rather than pushed.
- **`Coding_Practice(tasks)_Java/`** is never pushed — it is a per-request exclusion.
- **`prompts/`** docs (including this file and the earlier pull docs) are pushed along with the chapters.
- The local workspace is **not** a git repo; all git work happens inside the temp clone, so local files are
  left untouched.
