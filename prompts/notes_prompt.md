# Sync Notes — Pulling `PramodDutta/LearningPlaywright3x` into `LearnPlaywright3x_JS`

**Date:** 2026-10-11
**Task:** Take the changes from <https://github.com/PramodDutta/LearningPlaywright3x> into the local
`LearnPlaywright3x_JS` workspace, **excluding duplicate files**, and record the steps here.

---

## 1. Target

| Item | Value |
|---|---|
| Remote repo | `https://github.com/PramodDutta/LearningPlaywright3x` |
| Remote HEAD | `d5e6fb3` — 2026-09-08 — `docs: renumber abstract class chapter 31 to 30` |
| Local workspace | `C:\Users\Hp\Desktop\Shashi_playwright\Learnings\LearnPlaywright3x_JS` |
| Remote file count | 250 files (chapters `00`–`30`, `IQ_Notes`, `MCQ`, `README*`, `tsconfig.json`) |

---

## 2. What the local workspace looked like before

| Folder | State |
|---|---|
| `LearnPlaywright3x_JS_class_notes/` | An **existing git clone** of the same repo (tracking `origin/main`, clean, already at commit `d5e6fb3`). Already **identical** to the remote — 250/250 files match. |
| `00_gen_AI`, `01_Chapter_JS_Basics`, `02_Chapter_JS_Concepts`, `03_chapter_Identifier`, `04_chapter_Literal`, `05_chapter_operators` | The user's **restructured** top-level chapters (chapters `00`–`05` only). |
| `IQ_notes/`, `Coding_Practice(tasks)_JS/`, `Coding_Practice(tasks)_Java/`, `prompts/` | Local-only material. |

So the repo content already existed in two places (`class_notes` mirror + top-level `00`–`05`), but the
top-level had **no chapters `06`–`30`**.

---

## 3. Dedup rule used

A repo file was treated as a **duplicate** (and skipped) when a file with the **same filename** already
existed anywhere at the **top level** of the workspace. The `class_notes` mirror, `.commandcode` and `.git`
were **ignored** when building that duplicate set, so the copy targeted the top-level chapters.

Remaining files were copied **preserving the repo's folder layout** (e.g. `07_chapter_switch/39_Switch.js`).

---

## 4. Result

**Copied: 214 files · Skipped as duplicates: 36 files.**

| Top-level folder added | Files copied |
|---|---:|
| `00_chaptet_GENAI` | 1 |
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
| `IQ_Notes` | 5 |
| `MCQ` | 1 |
| `README.md` (root) | 1 |
| `README_backup.md` (root) | 1 |
| `tsconfig.json` (root) | 1 |
| **Total** | **214** |

---

## 5. Skipped duplicates (36)

These already had a same-named file at the top level, so they were **not** copied:

```
02_chapter_Javascript/02_let_concept.js
03_chapter_Identifier/03_Identifer_Rules.js
03_chapter_Identifier/04_Identifer_Rues_Part2.js
03_chapter_Identifier/05_Comments.js
03_chapter_Identifier/06_Identifer_IQ.js
04_chapter_Literal/07_Literal.js
04_chapter_Literal/08_null_undefined.js
04_chapter_Literal/09_Null_IQ.js
04_chapter_Literal/10_Literal.js
04_chapter_Literal/11_Number.js
04_chapter_Literal/12_Number_Part2.js
05_chapter_Operator/13_DataType.js
05_chapter_Operator/14_Assignment_Operator.js
05_chapter_Operator/15_Arithmetic_Opeartor.js
05_chapter_Operator/16_Comparsion_Operator.js
05_chapter_Operator/17_Logical_Operators.js
05_chapter_Operator/18_Confusing_Comparsion.js
05_chapter_Operator/18_Confusing_Comparsion_P2.js
05_chapter_Operator/20_Question.js
05_chapter_Operator/21_String_Op.js
05_chapter_Operator/22_Ternary_Op.js
05_chapter_Operator/23_IQ.js
05_chapter_Operator/24_IQ2.js
05_chapter_Operator/25_IQ3.js
05_chapter_Operator/26_IQ4.js
05_chapter_Operator/27_IQ5.js
05_chapter_Operator/28_Nested_Terny_Op.js
05_chapter_Operator/29_IQ_NT.js
05_chapter_Operator/30_NT_IQ2.js
05_chapter_Operator/31_Type_Op.js
05_chapter_Operator/32_In_De_Op.js
05_chapter_Operator/33_Ad_Incre.js
05_chapter_Operator/34_Incre_Part2.js
05_chapter_Operator/35_Decrement.js
05_chapter_Operator/36_Null_Coalescing.js
IQ_Notes/Source_Code_ByteCODE_Binary_IQ.md
```

---

## 6. Caveats / things to notice

- **Same name, different content.** `IQ_Notes/Source_Code_ByteCODE_Binary_IQ.md` was skipped because
  `IQ_notes/Source_Code_ByteCODE_Binary_IQ.md` already exists — but the repo version is **longer/newer**
  (4808 vs 4080 chars). The local file was left untouched. Update it manually if you want the repo version.
- **Near-duplicate folders.** `00_chaptet_GENAI` and `01_chapter_Javascript` were created for their single
  new file each; they sit next to your existing `00_gen_AI` / `01_Chapter_JS_Basics`. Merge or delete them if
  you don't want the overlap.
- **Root files added.** `README.md`, `README_backup.md` and `tsconfig.json` were copied to the workspace root
  (they were absent at top level).
- **`class_notes/` was not modified** — it was already up to date.
- **`.gitkeep` files** were copied into `23_OOPs_Polymorphism/` and `24_OOPs_Interview/`.
- Because dedup is by **filename only**, a repo file that changed *content* but kept its *name* will not be
  refreshed. Delete the local file first if you want the repo version.

---

## 7. Steps I ran

1. **Cloned** the repo to a scratch folder:
   `git clone --depth 1 https://github.com/PramodDutta/LearningPlaywright3x.git <scratch>/LearningPlaywright3x`
2. **Built the duplicate set** — filenames present at the workspace top level, excluding
   `LearnPlaywright3x_JS_class_notes/`, `.commandcode/` and `.git/`.
3. **Copied** every repo file whose filename was *not* in that set, recreating the repo's folder layout.
4. **Verified** — 214 copied, 36 skipped; every remaining skip is a `00`–`05` chapter file you already had.

The reusable version of this procedure lives in [`steps_to_pull_the_changes.md`](./steps_to_pull_the_changes.md).

---

## Appendix A — all 214 copied files

```
00_chaptet_GENAI/RICEPOT_SeleniumFramworkCreation.md
01_chapter_Javascript/01_HelloWorld.js
06_chapter_Statement/37_IQ.js
06_chapter_Statement/38_IQ2.js
06_chapter_Statement/38_Multiple_Condition.js
07_chapter_switch/39_Switch.js
07_chapter_switch/40_IQ.js
07_chapter_switch/41_IQ2.js
07_chapter_switch/42_REAL_API_Testing.js
07_chapter_switch/43_Switch_Group.js
07_chapter_switch/44_IQ.js
07_chapter_switch/45_IQ2.js
07_chapter_switch/46_IQ3.js
07_chapter_switch/47_IQ4.js
08_chapter_UserInputs/48_JS.js
08_chapter_UserInputs/49_Node_UI.js
08_chapter_UserInputs/50_Prompt.js
08_chapter_UserInputs/51_Fs.js
08_chapter_UserInputs/README.md
09_chapter_Loops/52_Loop.js
09_chapter_Loops/53_For_Loop.js
09_chapter_Loops/54_Increment.js
09_chapter_Loops/55_For_Loops.js
09_chapter_Loops/56_For_Loops2.js
09_chapter_Loops/57_While.js
09_chapter_Loops/58_While.js
09_chapter_Loops/59_Modie.js
09_chapter_Loops/60_While_Vs_For.js
09_chapter_Loops/61_Do_While.js
09_chapter_Loops/62_DoWhile_vs_While.js
09_chapter_Loops/63_NestedFor_lOOP.js
10_chapter_Arrays/64_Array.js
10_chapter_Arrays/65_Array.js
10_chapter_Arrays/66_Array_Creation.js
10_chapter_Arrays/67_Array_Access_Modify.js
10_chapter_Arrays/68_Arrays_Adding_Remove.js
10_chapter_Arrays/69_Array_REAL.js
10_chapter_Arrays/70_Array_Searching.js
10_chapter_Arrays/71_IQ.js
10_chapter_Arrays/72_Array_Interate.js
10_chapter_Arrays/73_Arrays_Transform.js
10_chapter_Arrays/74_Sorting.js
10_chapter_Arrays/75_Slicing.js
10_chapter_Arrays/76_ArrayConcat.js
10_chapter_Arrays/77_Array_Checking.js
10_chapter_Arrays/78_Copy.js
10_chapter_Arrays/79_Destructuring.js
11_chapter_Funtions/78_Fn.js
11_chapter_Funtions/79.Fn.js
11_chapter_Funtions/80_Type1_Basic_Fn.js
11_chapter_Funtions/81_Type2_Basic_Fn.js
11_chapter_Funtions/82_Type3_Basic_Fn.js
11_chapter_Funtions/83_Type4_Basic_Fn.js
11_chapter_Funtions/84_Template_Literal.js
11_chapter_Funtions/85_Fn_Exp.js
11_chapter_Funtions/86_Fn_Arrow.js
11_chapter_Funtions/87_Fn_Arrow.js
11_chapter_Funtions/88_REAL.js
11_chapter_Funtions/89.fn.js
11_chapter_Funtions/90_Spead_Fn.js
11_chapter_Funtions/91_Return_Fn.js
11_chapter_Funtions/92_Var_Let_Const.js
11_chapter_Funtions/93.Hoisting.js
11_chapter_Funtions/94_Var_Hoisting.js
11_chapter_Funtions/95_Fn_Hoisting.js
11_chapter_Funtions/96_Let_Hoisting.js
11_chapter_Funtions/97_Let.js
11_chapter_Funtions/98_TDZ.js
11_chapter_Funtions/99.IQ.js
11_chapter_Funtions/100_IQ.js
11_chapter_Funtions/101.js
11_chapter_Funtions/102_Hoisting_TDZ.md
11_chapter_Funtions/103_IQ.js
12_chapter_Fn_Closure/104_Scope_Fn.js
12_chapter_Fn_Closure/105_Closure.js
12_chapter_Fn_Closure/106_Closure_Remembers.js
12_chapter_Fn_Closure/107_Fn_Closure_REAL.js
12_chapter_Fn_Closure/108_Fn_Simple.js
13_String/109_String.js
13_String/110_String_Fn.js
13_String/111.Str_Searching.js
13_String/112_Extraction_String.js
13_String/113_String_More.js
13_String/114_Extra.js
13_String/115_Fn_String_Conversion.js
13_String/String_Cheatsheet.md
14_Objects/116_Objects.js
14_Objects/117_Object_Person.js
14_Objects/118_Object.js
14_Objects/119_Objects.js
14_Objects/120_Config.js
14_Objects/121_CallBy_Ref_CallByValue.js
15_Multi_Dimensions_Array/122_Array.js
15_Multi_Dimensions_Array/123_Array_2.JS
15_Multi_Dimensions_Array/124_Array_Fn.js
15_Multi_Dimensions_Array/125_Right_Pattern.js
15_Multi_Dimensions_Array/126_Left_Hand.js
15_Multi_Dimensions_Array/127_Pyramid_Pattern.js
16_Callback/128_Callback.js
16_Callback/129_Callback.js
16_Callback/130_Sync_Callback.js
16_Callback/131_Async_Callback.js
16_Callback/132_CallbackHell.js
16_Callback/133_Call_RealHello.js
16_Callback/134_Call_Return.js
16_Callback/135_Pyramid_DOM.js
17_Promise/136_Promise.js
17_Promise/137_REAL_Promise_API.js
17_Promise/138_REAL_Promise_API.js
17_Promise/139_Promise_Finally.js
17_Promise/140_Promise_REAL.js
17_Promise/141_Promise.All.js
17_Promise/142_Promise_Settle.js
17_Promise/143.Promise.race.js
17_Promise/144_Promise.IQ.js
17_Promise/145.IQ.js
18_Async_Await/146.js
18_Async_Await/147_BetterWay.js
18_Async_Await/148_AA.js
18_Async_Await/149_Example.spec.ts
18_Async_Await/150.js
18_Async_Await/151_Seq_Eexecution.js
18_Async_Await/152_Parall_Execution.js
18_Async_Await/153_API_Flaky.js
18_Async_Await/154_IQ.js
19_Export_Import/155.js
19_Export_Import/156_test.js
19_Export_Import/157.js
19_Export_Import/logs/logger.js
19_Export_Import/package.json
19_Export_Import/testutil.js
19_Export_Import/utils.js
20_Class_Object_OOPs/01_Class_Object/158.js
20_Class_Object_OOPs/01_Class_Object/159.js
20_Class_Object_OOPs/01_Class_Object/160.js
20_Class_Object_OOPs/01_Class_Object/161_Real_Conss.js
20_Class_Object_OOPs/02_Public_Private/162_REAL.js
20_Class_Object_OOPs/02_Public_Private/163_IQ.js
20_Class_Object_OOPs/02_Public_Private/164_Private_Public.js
20_Class_Object_OOPs/03_Static_JS/165_Static.js
20_Class_Object_OOPs/03_Static_JS/166_IQ.js
20_Class_Object_OOPs/03_Static_JS/167.js
20_Class_Object_OOPs/03_Static_JS/168.js
21_OOPs_Ecapsulation/169.js
21_OOPs_Ecapsulation/170_Car.js
21_OOPs_Ecapsulation/171_Ecap_Bnak.js
21_OOPs_Ecapsulation/172_IQ.js
21_OOPs_Ecapsulation/173_IQ.js
21_OOPs_Ecapsulation/174_IQ.js
21_OOPs_Ecapsulation/175_IQ.js
22_OOPs_Inheritance/01_Single_Inheritance/176_SI.js
22_OOPs_Inheritance/01_Single_Inheritance/177.js
22_OOPs_Inheritance/01_Single_Inheritance/178_IQ.js
22_OOPs_Inheritance/01_Single_Inheritance/179_IQ.js
22_OOPs_Inheritance/01_Single_Inheritance/180.IQ.js
22_OOPs_Inheritance/01_Single_Inheritance/181.IQ.js
22_OOPs_Inheritance/01_Single_Inheritance/182.js
22_OOPs_Inheritance/02_Multiple_Inheritance/178.js
22_OOPs_Inheritance/02_Multiple_Inheritance/179.js
22_OOPs_Inheritance/03_Multi_Level_Inheritance/180.js
22_OOPs_Inheritance/04_Hierarchial_Inheritance/181.js
23_OOPs_Polymorphism/.gitkeep
23_OOPs_Polymorphism/182_Method_Overriding.js
24_OOPs_Interview/.gitkeep
24_OOPs_Interview/195_IQ.ts
24_OOPs_Interview/196.ts
24_OOPs_Interview/EX1.js
24_OOPs_Interview/EX2.js
24_OOPs_Interview/EX3.js
24_OOPs_Interview/EX4.js
24_OOPs_Interview/EX5.js
25_Typescript/183.js
25_Typescript/184.js
25_Typescript/184.ts
25_Typescript/185.ts
25_Typescript/186.ts
25_Typescript/187.ts
25_Typescript/188.ts
25_Typescript/190.ts
25_Typescript/191.ts
25_Typescript/192.ts
25_Typescript/193.ts
25_Typescript/194.ts
26_OOPs_TS_Abstractions/202_Interface_Hook.ts
26_OOPs_TS_Abstractions/203_REAL_Config.ts
26_OOPs_TS_Abstractions/204_Class_Interface.ts
26_OOPs_TS_Abstractions/205_Interface_Misc.ts
26_OOPs_TS_Abstractions/206.js
26_OOPs_TS_Abstractions/Interface/197_Interface.ts
26_OOPs_TS_Abstractions/Interface/198_Readyonly.ts
26_OOPs_TS_Abstractions/Interface/199_Interface_PageObject.ts
26_OOPs_TS_Abstractions/Interface/200_API_Response.ts
26_OOPs_TS_Abstractions/Interface/201_Method_In.ts
27_Typescript_ENUM/205_ENUM.ts
27_Typescript_ENUM/206_ENUM.ts
27_Typescript_ENUM/207_REAL_Enum.ts
27_Typescript_ENUM/208_REAL_Browser_PW.ts
27_Typescript_ENUM/209_API_REAL.ts
28_Typescript_Generic/210_Generic.ts
28_Typescript_Generic/211_Generic_Class.ts
28_Typescript_Generic/212_API_Response.ts
29_Typescript_PRIVATE_PUBLIC_PROTECTED/213_PPP.ts
29_Typescript_PRIVATE_PUBLIC_PROTECTED/214_PageObjectModel.ts
29_Typescript_PRIVATE_PUBLIC_PROTECTED/215_Redaonly.ts
30_Typescript_Abstract_Class/216_Abstract.ts
IQ_Notes/01_Identifier_Rules.md
IQ_Notes/02_Keyword_Notes.md
IQ_Notes/03_commands_mac.md
IQ_Notes/03_commands_win.md
IQ_Notes/README.md
MCQ/Array_MCQ.md
README.md
README_backup.md
tsconfig.json
```
