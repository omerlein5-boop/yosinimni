# יוסי נמני שיפוצים ועבודות גמר — אתר תדמית

אתר תדמית רספונסיבי בעברית (RTL) לעסק שיפוצים ועבודות גמר בגוש דן.
האתר בנוי כ-**עמוד אחד** (one-page) עם ניווט עוגנים, גלריית עבודות, ליבת לידים (טלפון + וואטסאפ) ותמיכת SEO.

> **טכנולוגיה:** HTML, CSS ו-JavaScript סטטיים בלבד — ללא שלב build וללא תלויות. קל להעלאה ל-GitHub Pages / כל אחסון סטטי.

---

## מבנה הפרויקט

```
yosi-nimni-site/
├── index.html            # כל תוכן העמוד (סקשנים, מטא, OG, Schema.org)
├── css/
│   └── styles.css        # עיצוב מלא, RTL, רספונסיבי
├── js/
│   └── main.js           # שירותים, גלריה + פילטרים, לייטבוקס, אנימציות
├── public/
│   ├── logo.png          # הלוגו (גם favicon)
│   ├── showcase.mp4      # סרטון תצוגה
│   └── images/           # תמונות הפרויקטים (img02..img36)
├── .nojekyll             # מבטיח שירות תקין ב-GitHub Pages
└── README.md
```

### נתוני הגלריה
התמונות ממופות במבנה נתונים בתוך `js/main.js` (מערך `GALLERY`):

```js
{ f: "img08.jpeg", c: "bath", t: "חדר רחצה בחיפוי שיש מלא" }
//   f = שם קובץ   c = קטגוריה   t = כותרת/alt
```

קטגוריות: `complete` (דירות קומפלט), `bath` (חדרי רחצה), `finish` (גמרים),
`floor` (ריצוף וחיפוי), `exterior` (חוץ ופיתוח), `process` (תהליך עבודה).

**להוספת תמונה:** הוסיפו את הקובץ ל-`public/images/` ושורה חדשה למערך `GALLERY`.

---

## הרצה מקומית

האתר סטטי, אז כל שרת קבצים פשוט יספיק. אחת מהאפשרויות:

```bash
# Python 3
python3 -m http.server 8000

# או Node (npx)
npx serve .
```

ואז לפתוח בדפדפן: <http://localhost:8000>

> פתיחה ישירה של `index.html` (פרוטוקול `file://`) תעבוד גם, אך מומלץ שרת מקומי כדי שהסרטון והפונטים ייטענו כראוי.

---

## בנייה לפרודקשן

אין שלב build. הקבצים כפי שהם **הם** גרסת הפרודקשן.
לפני העלאה כדאי לוודא שהתמונות אופטימליות (כבר הוקטנו ל-≈1600px ואיכות מותאמת).

---

## פריסה ל-GitHub Pages

1. צרו ריפו חדש ב-GitHub והעלו את כל תוכן התיקייה לשורש הריפו:
   ```bash
   git init
   git add .
   git commit -m "Yosi Nimni renovation website"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/<REPO>.git
   git push -u origin main
   ```
2. ב-GitHub: **Settings → Pages**.
3. תחת *Build and deployment* → *Source*: בחרו **Deploy from a branch**.
4. *Branch*: `main` ו-`/ (root)` → **Save**.
5. תוך דקה-שתיים האתר יהיה זמין בכתובת:
   `https://<USERNAME>.github.io/<REPO>/`

קובץ `.nojekyll` כבר קיים ומונע מ-Jekyll להתערב בקבצים.

> **דומיין מותאם אישית:** הוסיפו קובץ `CONFIG`/`CNAME` עם הדומיין שלכם תחת Settings → Pages → Custom domain, ועדכנו את כתובות ה-`canonical` וה-`og:url` ב-`index.html`.

---

## פרטי העסק (במקום אחד לעדכון מהיר)

| פרט | ערך |
|-----|-----|
| שם | יוסי נמני שיפוצים ועבודות גמר |
| סלוגן | עבודות גמר עד מפתח |
| טלפון | 052-857-1414 |
| וואטסאפ | 972528571414 |
| אימייל | yosi1989n@gmail.com |
| אזור שירות | כל גוש דן |
| סטטוס | קבלן רשום |

קישורי הטלפון והוואטסאפ מופיעים ב-`index.html` (חיפוש: `tel:0528571414` ו-`wa.me/972528571414`).
הודעת הוואטסאפ המוגדרת: *"היי יוסי, אשמח לבדוק לגבי עבודות שיפוץ. פניתי מהאתר."*

---

## נגישות ו-SEO

- HTML סמנטי, `lang="he"` ו-`dir="rtl"`.
- `alt` לכל תמונה, ניווט נגיש למקלדת, ולייטבוקס עם תמיכת `Esc`/חיצים.
- מטא `title` + `description`, תגיות Open Graph, ונתוני `Schema.org` מסוג `GeneralContractor`.
- טעינה מהירה: תמונות `lazy-load`, סרטון `preload="none"`, ללא ספריות חיצוניות.
- תמיכה ב-`prefers-reduced-motion`.
