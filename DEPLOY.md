# העלאת האתר לאוויר + חיבור הדומיין yosinimni.com

האתר מוכן לחלוטין. נשארו רק שלבים שדורשים **התחברות לחשבונות שלך** (אחסון + GoDaddy).
בחר אחת משתי הדרכים. **דרך א' (Netlify)** היא הפשוטה ביותר ולא דורשת טרמינל.

---

## דרך א' — Netlify (מומלץ, הכי פשוט, בלי קוד)

### שלב 1 — להעלות את האתר (2 דקות)
1. כנס ל-<https://app.netlify.com/drop>
2. הירשם בחינם (אפשר עם חשבון Google).
3. גרור את הקובץ **`yosinimni-site.zip`** (נמצא ב-`Documents/claudecode/`) אל תוך החלון.
4. תוך כמה שניות האתר עולה לכתובת זמנית כמו `random-name.netlify.app` — כבר אפשר לראות אותו חי!

### שלב 2 — לחבר את הדומיין yosinimni.com
1. ב-Netlify: **Site configuration → Domain management → Add a domain**.
2. הקלד `yosinimni.com` → Netlify ייתן לך רשומות DNS.
3. הדרך הקלה ביותר: Netlify יציע **"Use Netlify DNS"** — הוא ייתן לך 4 כתובות *nameservers*
   (משהו כמו `dns1.p01.nsone.net`).

### שלב 3 — להזין ב-GoDaddy
1. כנס ל-GoDaddy → **My Products → Domains → yosinimni.com → DNS → Nameservers**.
2. בחר **Change → Enter my own nameservers** והדבק את 4 ה-nameservers מ-Netlify.
3. שמור. תוך 1–24 שעות הדומיין יתחבר ו-Netlify ייתן **HTTPS אוטומטי** (מנעול ירוק).

> אם אתה מעדיף לא לשנות nameservers, אפשר במקום זה להוסיף ב-GoDaddy DNS:
> רשומת **A** של `@` → `75.2.60.5`, ורשומת **CNAME** של `www` → שם־האתר־שלך`.netlify.app`.
> (Netlify יראה לך את הערכים המדויקים במסך ה-Domain.)

---

## דרך ב' — GitHub Pages (חינמי לתמיד, דורש חשבון GitHub)

הריפו כבר מוכן ומקומית עם commit. נשאר רק להעלות ל-GitHub ולהפעיל Pages.

### שלב 1 — ליצור ריפו ולהעלות
1. פתח חשבון ב-<https://github.com> (אם אין).
2. צור ריפו חדש בשם `yosinimni` (ריק, בלי README).
3. בטרמינל הרץ (החלף `USERNAME` בשם המשתמש שלך):
   ```bash
   cd ~/Documents/claudecode/yosi-nimni-site
   git branch -M main
   git remote add origin https://github.com/USERNAME/yosinimni.git
   git push -u origin main
   ```
   (GitHub יבקש שם משתמש + Personal Access Token כסיסמה — נוצר ב-Settings → Developer settings → Tokens.)

### שלב 2 — להפעיל Pages
1. ב-GitHub: **Settings → Pages**.
2. *Source*: **Deploy from a branch** → ענף `main` → תיקייה `/ (root)` → **Save**.
3. תחת **Custom domain** הקלד `yosinimni.com` → Save (קובץ ה-CNAME כבר קיים בריפו).
4. סמן **Enforce HTTPS** (אחרי שה-DNS יתחבר).

### שלב 3 — DNS ב-GoDaddy
ב-GoDaddy → **yosinimni.com → DNS → Records**, הוסף:

| Type  | Name | Value                 |
|-------|------|-----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | USERNAME.github.io    |

(מחק רשומת A קיימת של `@` אם יש. תוך כמה שעות מתחבר + HTTPS.)

---

## אחרי שהאתר באוויר
- בדוק `https://yosinimni.com` וגם `https://www.yosinimni.com`.
- שלח ליוסי את הקישור — מוכן לשליחה ללקוחות. 🎉

## עדכונים עתידיים
- **Netlify:** גרור zip מעודכן שוב ל-Netlify Drop (או חבר את הריפו לפריסה אוטומטית).
- **GitHub Pages:** `git add -A && git commit -m "update" && git push` — מתעדכן אוטומטית.
