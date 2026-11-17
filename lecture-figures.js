/* Selected lecture illustrations, reviewed against decks 1–5 on 2026-11-17. */
(function () {
  'use strict';
  const figures = [
  {
    "lessonId": "intro",
    "target": 11,
    "file": "lesson1-figure-11.jpg",
    "title": "מפה היסטורית — לא מפה תקפה של האישיות",
    "caption": "בציור הפרנולוגי חולק הראש לאזורים של תכונות וכישורים. זהו ניסיון היסטורי לקשור תפקודים למיקום, אך אין בסיס לקריאת אישיות מצורת הגולגולת. כדאי להבחין בין הטענה השגויה הזו לבין הרעיון המודרני שאזורים ורשתות במוח ממלאים תפקידים שונים.",
    "alt": "מפה היסטורית — לא מפה תקפה של האישיות — בציור הפרנולוגי חולק הראש לאזורים של תכונות וכישורים.",
    "width": 1600,
    "height": 1536,
    "source": "https://docs.google.com/presentation/d/1zVq-5TW5P-lT14nweOT85ExGQ2ZSPAABJhpa4e_bNwQ/edit#slide=id.p10",
    "slide": 11,
    "credit": "תרשים פרנולוגי מן המאה ה־19, כפי שמופיע במצגת."
  },
  {
    "lessonId": "intro",
    "target": 15,
    "file": "lesson1-figure-15.jpg",
    "title": "משכבות תאים למפת אזורים",
    "caption": "משמאל נראים חתכי רקמה שבהם אפשר לזהות שכבות וסידור שונה של תאים. במרכז מופיעה מפת אזורי ברודמן: הגבולות נקבעו לפי המבנה המיקרוסקופי של הקליפה. מימין מוצגת השוואה בין מינים. מספר של אזור הוא כתובת אנטומית, ולא תיאור מלא של תפקידו.",
    "alt": "משכבות תאים למפת אזורים — משמאל נראים חתכי רקמה שבהם אפשר לזהות שכבות וסידור שונה של תאים.",
    "width": 1600,
    "height": 595,
    "source": "https://docs.google.com/presentation/d/1zVq-5TW5P-lT14nweOT85ExGQ2ZSPAABJhpa4e_bNwQ/edit#slide=id.p14",
    "slide": 15,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "intro",
    "target": 16,
    "file": "lesson1-figure-16.jpg",
    "title": "כל שיטה מודדת היבט אחר",
    "caption": "העמודות מסדרות את השיטות לפי סוג המידע: מבנה, פעילות, תאים ומעגלים, או כימיה וחילוף חומרים. השורות מבדילות בין מדידות לא פולשניות למדידות המחייבות גישה לרקמה. לכן כדאי להתחיל בשאלה המחקרית ורק אחר כך לבחור מכשיר.",
    "alt": "כל שיטה מודדת היבט אחר — העמודות מסדרות את השיטות לפי סוג המידע: מבנה, פעילות, תאים ומעגלים, או כימיה וחילוף חומרים.",
    "width": 1599,
    "height": 633,
    "source": "https://docs.google.com/presentation/d/1zVq-5TW5P-lT14nweOT85ExGQ2ZSPAABJhpa4e_bNwQ/edit#slide=id.p15",
    "slide": 16,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "intro",
    "target": 17,
    "file": "lesson1-figure-17.jpg",
    "title": "לראות היכן — ולדעת מתי",
    "caption": "הציר האנכי מתאר את קנה המידה המרחבי והאופקי את קנה המידה הזמני; שני הצירים לוגריתמיים. האזורים בתרשים הם השוואה סכמטית בין שיטות. מדידה שמפרידה היטב בין אירועים מהירים אינה בהכרח זו שממקמת אותם בצורה המדויקת ביותר.",
    "alt": "לראות היכן — ולדעת מתי — הציר האנכי מתאר את קנה המידה המרחבי והאופקי את קנה המידה הזמני; שני הצירים לוגריתמיים.",
    "width": 1599,
    "height": 1041,
    "source": "https://docs.google.com/presentation/d/1zVq-5TW5P-lT14nweOT85ExGQ2ZSPAABJhpa4e_bNwQ/edit#slide=id.p16",
    "slide": 17,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "intro",
    "target": 19,
    "file": "lesson1-figure-19.jpg",
    "title": "הדרך מפעילות עצבית לאות BOLD",
    "caption": "קראו את השרשרת משמאל לימין: פעילות עצבית מלווה בשינוי בדרישה המטבולית ובזרימת הדם, שמשנה את כמות הדאוקסיהמוגלובין ואת אות ה־MRI. הגרף מדגים תגובה שנבנית במשך שניות. זהו מדד עקיף לפעילות, ולא רישום של ירי הנוירונים עצמם.",
    "alt": "הדרך מפעילות עצבית לאות BOLD — קראו את השרשרת משמאל לימין: פעילות עצבית מלווה בשינוי בדרישה המטבולית ובזרימת הדם, שמשנה את כמות הדאוקסיהמוגלובין ואת אות ה־MRI.",
    "width": 1599,
    "height": 685,
    "source": "https://docs.google.com/presentation/d/1zVq-5TW5P-lT14nweOT85ExGQ2ZSPAABJhpa4e_bNwQ/edit#slide=id.p18",
    "slide": 19,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "intro",
    "target": 21,
    "file": "lesson1-figure-21.jpg",
    "title": "איך רעש יכול להיראות כמו פעילות?",
    "caption": "משמאל מוצגת דוגמת הסלמון המת; מימין הדמיה של רעש בלבד. כשבודקים הרבה מקומות, חלקם עשויים לעבור סף סטטיסטי במקרה. בדוגמה הזו הסימונים נעלמים לאחר תיקון לריבוי השוואות. המסר הוא לבדוק את שיטת הניתוח, ולא להסתפק במפה צבעונית.",
    "alt": "איך רעש יכול להיראות כמו פעילות? — משמאל מוצגת דוגמת הסלמון המת; מימין הדמיה של רעש בלבד.",
    "width": 1599,
    "height": 680,
    "source": "https://docs.google.com/presentation/d/1zVq-5TW5P-lT14nweOT85ExGQ2ZSPAABJhpa4e_bNwQ/edit#slide=id.sa_slide",
    "slide": 21,
    "credit": "דוגמת הסלמון: Bennett ועמיתיו (2009), כפי שמצוטט במצגת; מימין הדמיית רעש."
  },
  {
    "lessonId": "intro",
    "target": 24,
    "file": "lesson1-figure-24.jpg",
    "title": "מפות משלימות של אותו מוח",
    "caption": "סביב המוח מופיעים סוגים שונים של מפות: מבנה, פעילות, מסילות, קישוריות, ארגון תאי ואטלסים. כל מפה מדגישה תכונה אחרת. השילוב ביניהן מאפשר לשאול כיצד המבנה, החיבורים והפעילות קשורים זה לזה.",
    "alt": "מפות משלימות של אותו מוח — סביב המוח מופיעים סוגים שונים של מפות: מבנה, פעילות, מסילות, קישוריות, ארגון תאי ואטלסים.",
    "width": 1600,
    "height": 682,
    "source": "https://docs.google.com/presentation/d/1zVq-5TW5P-lT14nweOT85ExGQ2ZSPAABJhpa4e_bNwQ/edit#slide=id.nf_slide",
    "slide": 24,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "mri",
    "target": "scanner",
    "file": "lesson2-figure-05.jpg",
    "title": "ארבעת המרכיבים המרכזיים בסורק",
    "caption": "המגנט הראשי יוצר את השדה הקבוע; במערכת המוצגת הליום נוזלי מסייע לשמור על המגנט מוליך־העל בקור הדרוש. סלילי הגרדיאנט משנים את השדה לפי מיקום, וסלילי הרדיו משמשים לעירור ולקליטת האות. כך אפשר לעבור מאות שמקורו ברקמה למידע על מיקומה.",
    "alt": "ארבעת המרכיבים המרכזיים בסורק — המגנט הראשי יוצר את השדה הקבוע; במערכת המוצגת הליום נוזלי מסייע לשמור על המגנט מוליך־העל בקור הדרוש.",
    "width": 1600,
    "height": 701,
    "source": "https://docs.google.com/presentation/d/1kAhOEQjNloX6YpgiWUmBm2dtAK1SJHB3hMWAzTOQZ40/edit#slide=id.p5",
    "slide": 5,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "mri",
    "target": "materials",
    "file": "lesson2-figure-13.jpg",
    "title": "אותו מגנט — תגובות שונות של חומרים",
    "caption": "השוו בין ברזל, חומר פרמגנטי ומים: ההבדל הוא באופן שבו החומר מגיב לשדה חיצוני. פרומגנטיות יכולה ליצור תגובה חזקה מאוד; פרמגנטיות היא תגובה חלשה בכיוון השדה; ודיאמגנטיות היא תגובה חלשה נגדו. הדוגמאות באיור עוזרות להפריד בין המושגים.",
    "alt": "אותו מגנט — תגובות שונות של חומרים — השוו בין ברזל, חומר פרמגנטי ומים: ההבדל הוא באופן שבו החומר מגיב לשדה חיצוני.",
    "width": 1600,
    "height": 717,
    "source": "https://docs.google.com/presentation/d/1kAhOEQjNloX6YpgiWUmBm2dtAK1SJHB3hMWAzTOQZ40/edit#slide=id.p13",
    "slide": 13,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "mri",
    "target": "spin",
    "file": "lesson2-figure-17.jpg",
    "title": "ממולקולת מים למומנט מגנטי",
    "caption": "האיור מתקרב מן המים אל אטום המימן והפרוטון שבגרעינו. לפרוטון יש ספין ומומנט מגנטי, ולכן הוא יכול לתרום לאות MRI. ציור המגנט הזעיר הוא המחשה של תכונה קוונטית; הוא אינו אומר שהפרוטון הוא כדור שמסתובב כמו סביבון.",
    "alt": "ממולקולת מים למומנט מגנטי — האיור מתקרב מן המים אל אטום המימן והפרוטון שבגרעינו.",
    "width": 1600,
    "height": 717,
    "source": "https://docs.google.com/presentation/d/1kAhOEQjNloX6YpgiWUmBm2dtAK1SJHB3hMWAzTOQZ40/edit#slide=id.p17",
    "slide": 17,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "mri",
    "target": "energy",
    "file": "lesson2-figure-22.jpg",
    "title": "עודף קטן שאפשר למדוד",
    "caption": "בשדה החיצוני יש מעט יותר פרוטונים במצב האנרגיה הנמוך. רוב התרומות מתקזזות, אך ההפרש הקטן יוצר מגנטיזציה כוללת לאורך השדה. מספר החצים באיור סכמטי: בפועל העודף קטן מאוד ביחס לכלל הפרוטונים.",
    "alt": "עודף קטן שאפשר למדוד — בשדה החיצוני יש מעט יותר פרוטונים במצב האנרגיה הנמוך.",
    "width": 1600,
    "height": 717,
    "source": "https://docs.google.com/presentation/d/1kAhOEQjNloX6YpgiWUmBm2dtAK1SJHB3hMWAzTOQZ40/edit#slide=id.p21",
    "slide": 22,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "mri",
    "target": "precession",
    "file": "lesson2-figure-29.jpg",
    "title": "שדה חזק יותר, תדירות גבוהה יותר",
    "caption": "שלושת הפנלים משווים שדות בעוצמות שונות. גלי הזמן ממחישים שבאותו פרק זמן מתרחשים יותר מחזורים כשהשדה חזק יותר. זהו הרעיון של תדירות לרמור: עבור אותו סוג גרעין, תדירות הפרצסיה גדלה ביחס ישר לעוצמת השדה.",
    "alt": "שדה חזק יותר, תדירות גבוהה יותר — שלושת הפנלים משווים שדות בעוצמות שונות.",
    "width": 1600,
    "height": 717,
    "source": "https://docs.google.com/presentation/d/1kAhOEQjNloX6YpgiWUmBm2dtAK1SJHB3hMWAzTOQZ40/edit#slide=id.p28",
    "slide": 29,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "mri",
    "target": "excitation",
    "file": "lesson2-figure-36.jpg",
    "title": "מה משתנה בזמן העירור?",
    "caption": "השוו את המצב לפני פולס הרדיו למצב שאחריו. עירור בתדירות מתאימה יכול לשנות את אוכלוסיות מצבי האנרגיה וליצור רכיב רוחבי מתואם של המגנטיזציה. הרכיב הרוחבי המסתובב הוא שמאפשר לקבל אות בסליל הקליטה.",
    "alt": "מה משתנה בזמן העירור? — השוו את המצב לפני פולס הרדיו למצב שאחריו.",
    "width": 1600,
    "height": 717,
    "source": "https://docs.google.com/presentation/d/1kAhOEQjNloX6YpgiWUmBm2dtAK1SJHB3hMWAzTOQZ40/edit#slide=id.p37",
    "slide": 36,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "mri",
    "target": "components",
    "file": "lesson2-figure-39.jpg",
    "title": "חץ אחד ושני רכיבים",
    "caption": "המגנטיזציה הכוללת מתוארת כחץ. ההיטל שלו לאורך השדה הוא Mz, וההיטל במישור הניצב לשדה הוא Mxy. כשמשנים את כיוון החץ, משתנים שני ההיטלים; אין מדובר בשני סוגים שונים של פרוטונים.",
    "alt": "חץ אחד ושני רכיבים — המגנטיזציה הכוללת מתוארת כחץ.",
    "width": 1600,
    "height": 717,
    "source": "https://docs.google.com/presentation/d/1kAhOEQjNloX6YpgiWUmBm2dtAK1SJHB3hMWAzTOQZ40/edit#slide=id.p40",
    "slide": 39,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "mri",
    "target": "flip-angle",
    "file": "lesson2-figure-43.jpg",
    "title": "זווית ההטיה קובעת את חלוקת הרכיבים",
    "caption": "האיור משווה הטיות שונות, החל ממגנטיזציה בשיווי משקל. בפולס אידיאלי של 90° המגנטיזציה עוברת למישור הרוחבי; בפולס של 180° היא פונה בכיוון האורכי ההפוך. זו המחשה גאומטרית של כיוון המגנטיזציה ושל הרכיב שניתן לקלוט.",
    "alt": "זווית ההטיה קובעת את חלוקת הרכיבים — האיור משווה הטיות שונות, החל ממגנטיזציה בשיווי משקל.",
    "width": 1599,
    "height": 705,
    "source": "https://docs.google.com/presentation/d/1kAhOEQjNloX6YpgiWUmBm2dtAK1SJHB3hMWAzTOQZ40/edit#slide=id.p47",
    "slide": 43,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "mri",
    "target": "signal",
    "file": "lesson2-figure-44.jpg",
    "title": "ממגנטיזציה מסתובבת לאות חשמלי",
    "caption": "קראו את השלבים ברצף: לאחר העירור יש רכיב רוחבי מסתובב, השטף המגנטי דרך סליל הקליטה משתנה, ובסליל נוצר מתח משתנה. המערכת דוגמת את המתח הזה. בשלב זה יש אות בזמן; בניית תמונה דורשת גם קידוד מרחבי.",
    "alt": "ממגנטיזציה מסתובבת לאות חשמלי — קראו את השלבים ברצף: לאחר העירור יש רכיב רוחבי מסתובב, השטף המגנטי דרך סליל הקליטה משתנה, ובסליל נוצר מתח משתנה.",
    "width": 1600,
    "height": 717,
    "source": "https://docs.google.com/presentation/d/1kAhOEQjNloX6YpgiWUmBm2dtAK1SJHB3hMWAzTOQZ40/edit#slide=id.p48",
    "slide": 44,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "after-rf",
    "file": "lesson3-figure-04.jpg",
    "title": "עירור יוצר רכיב רוחבי שניתן לקלוט",
    "caption": "משמאל מוצג המצב לפני העירור, ובמרכז השינוי בעקבות פולס של 90°. מימין מסומן Mxy, הרכיב הרוחבי הכולל. לאחר סיום הפולס הרכיב הזה ממשיך להסתובב ודועך, ובמקביל המגנטיזציה האורכית מתאוששת.",
    "alt": "עירור יוצר רכיב רוחבי שניתן לקלוט — משמאל מוצג המצב לפני העירור, ובמרכז השינוי בעקבות פולס של 90°.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p4",
    "slide": 4,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "fourier",
    "file": "lesson3-figure-11.jpg",
    "title": "אות מורכב הוא סכום של תדרים",
    "caption": "משמאל שלושה רכיבים מחזוריים, באמצע האות שמתקבל מחיבורם, ומימין הספקטרום. התמרת פורייה מחליפה את השאלה ״איך האות משתנה בזמן?״ בשאלה ״אילו תדרים מרכיבים אותו?״. כל פסגה מייצגת רכיב בתדר אחר.",
    "alt": "אות מורכב הוא סכום של תדרים — משמאל שלושה רכיבים מחזוריים, באמצע האות שמתקבל מחיבורם, ומימין הספקטרום.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p10",
    "slide": 11,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "spectroscopy",
    "file": "lesson3-figure-13.jpg",
    "title": "לקרוא את הפיקים בספקטרום",
    "caption": "מיקום הפסגה על ציר ההיסט הכימי מסייע לזהות לאיזה אות כימי היא שייכת. באיור מסומנים כולין, קריאטין ו־NAA, לצד רכיבים נוספים. שטח הפסגה נושא מידע על כמות החומר, אך תרגומו לריכוז מחייב תנאי מדידה וניתוח מתאימים.",
    "alt": "לקרוא את הפיקים בספקטרום — מיקום הפסגה על ציר ההיסט הכימי מסייע לזהות לאיזה אות כימי היא שייכת.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p12",
    "slide": 13,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "t1-recovery",
    "file": "lesson3-figure-16.jpg",
    "title": "איך חוזר החץ האורכי?",
    "caption": "מייד לאחר פולס אידיאלי של 90° הרכיב Mz הוא אפס. בהמשך נבנה מחדש הפרש האוכלוסיות, והחץ האורכי גדל לעבר ערך שיווי המשקל M₀. T1 מתאר את קצב ההתאוששות הזו. החצים והאוכלוסיות מצוירים באופן סכמטי.",
    "alt": "איך חוזר החץ האורכי? — מייד לאחר פולס אידיאלי של 90° הרכיב Mz הוא אפס.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p15",
    "slide": 16,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "molecular-environment",
    "file": "lesson3-figure-18.jpg",
    "title": "אותן מולקולות מים, סביבה שונה",
    "caption": "נוזל המוח והשדרה, חומר אפור וחומר לבן שונים בסביבה המולקולרית של המים ובאינטראקציות שלהם. לכן זמני T1 שונים בין הרקמות. העקומה היא המחשה סכמטית של הקשר לתנועה מולקולרית; היא אינה מדידה של כל רקמה בנקודה יחידה.",
    "alt": "אותן מולקולות מים, סביבה שונה — נוזל המוח והשדרה, חומר אפור וחומר לבן שונים בסביבה המולקולרית של המים ובאינטראקציות שלהם.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p17",
    "slide": 18,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "segmentation",
    "file": "lesson3-figure-19.jpg",
    "title": "מתמונה בגוני אפור לתוויות רקמה",
    "caption": "משמאל תמונת MRI, במרכז התפלגות עוצמות האות, ומימין חלוקה לרקמות. החפיפה בין ההתפלגויות מזכירה שעוצמת האות לבדה אינה תמיד מספיקה: גם המיקום והסביבה האנטומית מסייעים לסיווג. צבע בתוצאת הסגמנטציה מסמן תווית שחושבה.",
    "alt": "מתמונה בגוני אפור לתוויות רקמה — משמאל תמונת MRI, במרכז התפלגות עוצמות האות, ומימין חלוקה לרקמות.",
    "width": 1599,
    "height": 449,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.h5b2f37e9a821d60d_0_46",
    "slide": 19,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "inversion",
    "file": "lesson3-figure-22.jpg",
    "title": "התאוששות שמתחילה בכיוון ההפוך",
    "caption": "פולס היפוך אידיאלי מעביר את Mz מ־M₀ ל־‎−M₀. מכאן המגנטיזציה מתאוששת, עוברת דרך אפס ומתקרבת שוב לשיווי המשקל. מדידה לאחר זמני המתנה שונים מאפשרת לאמוד את קצב ההתאוששות ואת T1.",
    "alt": "התאוששות שמתחילה בכיוון ההפוך — פולס היפוך אידיאלי מעביר את Mz מ־M₀ ל־‎−M₀.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p21",
    "slide": 22,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "t1-map",
    "file": "lesson3-figure-25.jpg",
    "title": "מסדרה של תמונות למפה כמותית",
    "caption": "משמאל תמונות שנמדדו בזמני TI שונים; מימין אומדן T1 לכל ווקסל. סרגל הצבעים מציין זמן במילישניות, ולא עוצמת אות רגילה. המפה במצגת היא אומדן מן הניסוי המוצג, ולכן אין לקרוא את הצבעים כערכי ייחוס אוניברסליים.",
    "alt": "מסדרה של תמונות למפה כמותית — משמאל תמונות שנמדדו בזמני TI שונים; מימין אומדן T1 לכל ווקסל.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p24",
    "slide": 25,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "transverse",
    "file": "lesson3-figure-29.jpg",
    "title": "אותם חצים — סכום קטן יותר",
    "caption": "בשורה העליונה החצים מתחילים בתיאום ובהמשך מתפזרים בזוויות שונות. בשורה התחתונה נראה הסכום שלהם: ככל שהפאזות מפוזרות יותר, החץ הכולל קטן. האות יכול לדעוך גם כשהמומנט המגנטי של כל ספין לא נעלם.",
    "alt": "אותם חצים — סכום קטן יותר — בשורה העליונה החצים מתחילים בתיאום ובהמשך מתפזרים בזוויות שונות.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p28",
    "slide": 29,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "transverse",
    "file": "lesson3-figure-31.jpg",
    "title": "למה T2* קצר מ־T2 או שווה לו?",
    "caption": "העקומה של T2 מתארת את אובדן הקוהרנטיות הנובע מאינטראקציות מיקרוסקופיות. ב־T2* מצטרפת גם התפזרות פאזה עקב הבדלי שדה סטטיים. לכן האות החופשי דועך לפחות באותה מהירות, ולעיתים מהר יותר.",
    "alt": "למה T2* קצר מ־T2 או שווה לו? — העקומה של T2 מתארת את אובדן הקוהרנטיות הנובע מאינטראקציות מיקרוסקופיות.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p30",
    "slide": 31,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "local-fields",
    "file": "lesson3-figure-32.jpg",
    "title": "השדה המקומי מושפע מהסביבה",
    "caption": "האיור מציג שלושה מקורות להבדלים מקומיים בשדה: מפגש אוויר–רקמה, מתכות סמוכות, וחומרים ברקמה ובדם. שימו לב לאזורי אובדן האות ולעיוותים בתמונות. הם ממחישים ששינוי בתמונה עשוי לנבוע גם מן השדה המקומי.",
    "alt": "השדה המקומי מושפע מהסביבה — האיור מציג שלושה מקורות להבדלים מקומיים בשדה: מפגש אוויר–רקמה, מתכות סמוכות, וחומרים ברקמה ובדם.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p31",
    "slide": 32,
    "credit": "התמונה הימנית התחתונה בטור המתכות: Hellerhoff, ברישיון CC BY-SA 4.0, בחיתוך כפי שמופיע במצגת; המקור מקושר בשקופית.",
    "creditUrl": "https://commons.wikimedia.org/wiki/File:Artefakte_durch_Zahnspange_in_der_MRT_14W_-_MR_-_001.jpg",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  {
    "lessonId": "relax",
    "target": "spin-echo",
    "file": "lesson3-figure-41.jpg",
    "title": "מהתפזרות פאזה להתכנסות ולאקו",
    "caption": "קראו משמאל לימין: עירור, התפזרות פאזה, פולס 180°, התכנסות, ואז אקו. הפולס משנה את דפוס הפאזות כך שהבדלי תדר סטטיים יכולים להתמקד מחדש. הוא אינו הופך את כיוון הפרצסיה ואינו מבטל את דעיכת T2.",
    "alt": "מהתפזרות פאזה להתכנסות ולאקו — קראו משמאל לימין: עירור, התפזרות פאזה, פולס 180°, התכנסות, ואז אקו.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p41",
    "slide": 41,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "relax",
    "target": "measuring-t2",
    "file": "lesson3-figure-43.jpg",
    "title": "רצף אקואים חושף את דעיכת T2",
    "caption": "כל פולס 180° מאפשר ליצור אקו נוסף, אך שיאי האקואים הולכים וקטנים. מתאימים עקומת דעיכה לעוצמות שנמדדו בזמני אקו שונים וכך מעריכים את T2. האיור מדגיש שמיקוד מחדש אינו מחזיר את כל האות שאבד.",
    "alt": "רצף אקואים חושף את דעיכת T2 — כל פולס 180° מאפשר ליצור אקו נוסף, אך שיאי האקואים הולכים וקטנים.",
    "width": 1600,
    "height": 736,
    "source": "https://docs.google.com/presentation/d/1J4A8vcDJO4pGj2M8YeH-e0pNS-QP0G6heT1DtoxstRE/edit#slide=id.p43",
    "slide": 43,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "gradients",
    "file": "lesson4-figure-04.jpg",
    "title": "גרדיאנט: עוצמת שדה שמשתנה עם המקום",
    "caption": "משמאל החצים שווים בגודלם, ומימין עוצמת השדה משתנה לאורך המיקום. מאחר שתדירות הפרצסיה תלויה בשדה, הגרדיאנט יוצר קשר בין תדירות למיקום. החצים מתארים את עוצמת השדה, ולא תנועה של הרקמה.",
    "alt": "גרדיאנט: עוצמת שדה שמשתנה עם המקום — משמאל החצים שווים בגודלם, ומימין עוצמת השדה משתנה לאורך המיקום.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p4",
    "slide": 4,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "slice",
    "file": "lesson4-figure-12.jpg",
    "title": "שלוש בחירות שמגדירות חתך",
    "caption": "כיוון הגרדיאנט קובע את מישור החתך. תדירות המרכז של פולס הרדיו קובעת את המיקום לאורך אותו כיוון. רוחב תחום התדרים ועוצמת הגרדיאנט קובעים יחד את עובי החתך. שלושת חתכי המוח מימין ממחישים את המישורים השונים.",
    "alt": "שלוש בחירות שמגדירות חתך — כיוון הגרדיאנט קובע את מישור החתך.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p10",
    "slide": 12,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "encoding",
    "file": "lesson4-figure-16.jpg",
    "title": "קידוד תדר: עמודות שונות, קצבים שונים",
    "caption": "לפני הפעלת הגרדיאנט הספינים שבאיור נעים באותה תדירות. בזמן הפעלתו התדירות משתנה בין העמודות בהתאם למיקום. כך האות הנקלט כולל מידע על אחד מצירי התמונה.",
    "alt": "קידוד תדר: עמודות שונות, קצבים שונים — לפני הפעלת הגרדיאנט הספינים שבאיור נעים באותה תדירות.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p13",
    "slide": 16,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "encoding",
    "file": "lesson4-figure-17.jpg",
    "title": "קידוד פאזה: סימון הכיוון השני",
    "caption": "גרדיאנט קצר לאורך הכיוון השני יוצר הפרשי זווית בין השורות. לאחר כיבויו נשארים הפרשי הפאזה שהצטברו. חוזרים על המדידה עם עוצמות שונות של קידוד פאזה, כדי לאסוף את המידע הדרוש לשחזור התמונה.",
    "alt": "קידוד פאזה: סימון הכיוון השני — גרדיאנט קצר לאורך הכיוון השני יוצר הפרשי זווית בין השורות.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p14",
    "slide": 17,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "k-space",
    "file": "lesson4-figure-20.jpg",
    "title": "מה תורמים מרכז מרחב k ושוליו?",
    "caption": "בכל עמודה מוצגים הנתונים שנשמרו והתמונה ששוחזרה מהם. שמירת תדרים מרחביים נמוכים משמרת בעיקר צורות רחבות ושינויי בהירות; תדרים גבוהים מדגישים קצוות ופרטים. נקודה במרחב k אינה פיקסל באותו מקום בתמונת המוח.",
    "alt": "מה תורמים מרכז מרחב k ושוליו? — בכל עמודה מוצגים הנתונים שנשמרו והתמונה ששוחזרה מהם.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.kspace_detail",
    "slide": 20,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "timing",
    "file": "lesson4-figure-24.jpg",
    "title": "שני שעונים ברצף Spin echo",
    "caption": "TE נמדד מפולס העירור ועד מרכז האקו. TR נמדד בין פולסי עירור עוקבים של אותו חתך. אלה זמני רצף שאנחנו בוחרים: הראשון משפיע על מידת הדעיכה עד הקריאה, והשני על מידת ההתאוששות לפני העירור הבא.",
    "alt": "שני שעונים ברצף Spin echo — TE נמדד מפולס העירור ועד מרכז האקו.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p21",
    "slide": 24,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "weighting",
    "file": "lesson4-figure-30.jpg",
    "title": "שקלול T2: להדגיש הבדלים בדעיכה",
    "caption": "בדוגמת Spin echo בוחרים TR ארוך כדי להפחית את השפעת T1, ו־TE ארוך יחסית כדי לאפשר להבדלי T2 להתבטא. העקומות מראות שאחרי אותה המתנה נשארת עוצמת אות שונה בכל רקמה. נוזל המוח והשדרה נשאר בהיר בדוגמה.",
    "alt": "שקלול T2: להדגיש הבדלים בדעיכה — בדוגמת Spin echo בוחרים TR ארוך כדי להפחית את השפעת T1, ו־TE ארוך יחסית כדי לאפשר להבדלי T2 להתבטא.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p27",
    "slide": 30,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "weighting",
    "file": "lesson4-figure-31.jpg",
    "title": "שקלול T1: להדגיש הבדלים בהתאוששות",
    "caption": "TR קצר יחסית חושף את ההבדלים בכמות המגנטיזציה האורכית שהתאוששה. TE קצר מפחית את תרומת דעיכת T2. שימו לב שבדוגמה החומר הלבן בהיר מן החומר האפור, ואילו נוזל המוח והשדרה כהה.",
    "alt": "שקלול T1: להדגיש הבדלים בהתאוששות — TR קצר יחסית חושף את ההבדלים בכמות המגנטיזציה האורכית שהתאוששה.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p28",
    "slide": 31,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "suppression",
    "file": "lesson4-figure-33.jpg",
    "title": "FLAIR: להשקיט את הנוזל כדי לראות לידו",
    "caption": "השוו בין התמונה המשוקללת T2 לתמונת FLAIR: אות נוזל המוח והשדרה מדוכא ב־FLAIR, בעוד שחלק מהממצאים הבהירים סמוך אליו נשארים בולטים. החצים מדגימים את היתרון של שינוי הניגודיות; הצבע הבהיר לבדו אינו קובע אבחנה.",
    "alt": "FLAIR: להשקיט את הנוזל כדי לראות לידו — השוו בין התמונה המשוקללת T2 לתמונת FLAIR: אות נוזל המוח והשדרה מדוכא ב־FLAIR, בעוד שחלק מהממצאים הבהירים סמוך אליו נשארים בולטים.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p30",
    "slide": 33,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "mprage",
    "file": "lesson4-figure-38.jpg",
    "title": "לראות את הגבול בין רקמות",
    "caption": "משמאל חתך מלא ומימין הגדלה של הקורטקס. ההבדלים בבהירות בין החומר הלבן, החומר האפור והנוזל מאפשרים לזהות גבולות אנטומיים. איכות הגבולות חשובה בהמשך לסגמנטציה ולמדידות של מבנה המוח.",
    "alt": "לראות את הגבול בין רקמות — משמאל חתך מלא ומימין הגדלה של הקורטקס.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p35",
    "slide": 38,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "volume",
    "file": "lesson4-figure-39.jpg",
    "title": "מתוויות רקמה למדידת מבנה מסוים",
    "caption": "האיור מתקדם מתמונת MRI לסיווג רקמות, ואז לסימון ההיפוקמפוס. כדי לחשב נפח צריך לזהות אילו ווקסלים שייכים למבנה ולחבר את נפחיהם. סגמנטציה של חומר אפור ולבן היא שלב מסייע, אך אינה מחליפה זיהוי אנטומי של ההיפוקמפוס.",
    "alt": "מתוויות רקמה למדידת מבנה מסוים — האיור מתקדם מתמונת MRI לסיווג רקמות, ואז לסימון ההיפוקמפוס.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p36",
    "slide": 39,
    "credit": "תמונת ההיפוקמפוס: Adeyemi ועמיתיו (2025), איור 1A, בחיתוך, ברישיון CC BY 4.0; יתר התמונות ממצגות הקורס.",
    "creditUrl": "https://doi.org/10.1111/ene.70076",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "lessonId": "image",
    "target": "fast-spin-echo",
    "file": "lesson4-figure-45.jpg",
    "title": "כמה אקואים, כמה שורות נתונים",
    "caption": "אחרי עירור אחד יוצרים כמה אקואים ומשתמשים בכל אחד למילוי שורה אחרת במרחב k. כך FSE אוסף יותר מידע בכל TR ומקצר את הסריקה. זמני הסריקה המספריים באיור הם דוגמה בתנאים המצוינים במצגת, ולא זמן קבוע של השיטה.",
    "alt": "כמה אקואים, כמה שורות נתונים — אחרי עירור אחד יוצרים כמה אקואים ומשתמשים בכל אחד למילוי שורה אחרת במרחב k.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p42",
    "slide": 45,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "image",
    "target": "epi",
    "file": "lesson4-figure-47.jpg",
    "title": "EPI: קריאה מהירה הלוך ושוב",
    "caption": "החצים ממחישים מסלול מהיר בין שורות מרחב k באמצעות החלפת כיוון גרדיאנט הקריאה. ב־single-shot EPI אפשר לאסוף את נתוני התמונה לאחר עירור אחד. התמונות מזכירות שלמהירות יש גם מחיר ברגישות לעיוותים ולאובדן אות.",
    "alt": "EPI: קריאה מהירה הלוך ושוב — החצים ממחישים מסלול מהיר בין שורות מרחב k באמצעות החלפת כיוון גרדיאנט הקריאה.",
    "width": 1600,
    "height": 731,
    "source": "https://docs.google.com/presentation/d/1nRNs7YCBrSBuPHBmiG5jXOp4oVDABc6bJQxJySujtQA/edit#slide=id.p44",
    "slide": 47,
    "credit": "איור מתוך מצגת הקורס מיפוי המוח ודימות מוחי, 04553505."
  },
  {
    "lessonId": "anatomy",
    "target": "commissures",
    "file": "lesson5-figure-12.jpg",
    "title": "הגשרים בין שני צדי המוח",
    "caption": "ארבעת המבטים מציגים את הקומיסורות מכיוונים משלימים. כפיס המוח (Corpus callosum), המסומן בירוק, הוא גשר הסיבים הגדול בין אזורי הקליפה משני הצדדים. לצד הקומיסורה הקדמית והקומיסורה ההיפוקמפלית מוצגות גם הקומיסורות ההבנולרית והאחורית בעומק המוח. AC ו־PC משמשות גם נקודות ציון ליישור תמונות; קו AC–PC הוא קו ייחוס גאומטרי, לא מסילת סיבים.",
    "alt": "הגשרים בין שני צדי המוח — ארבעת המבטים מציגים את הקומיסורות מכיוונים משלימים.",
    "width": 1600,
    "height": 534,
    "source": "https://docs.google.com/presentation/d/1sUX442wVnKPf2qSHckKlV8PnQSQvLdQndmqx_aPn9jk/edit#slide=id.p10",
    "slide": 12,
    "credit": "המחשה אנטומית מתוך מצגת 5. מקורות המצגת: Catena Baudo (2022), Akeret (2022), Gangal (2026)."
  }
];
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const grouped = new Map();
  for (const figure of figures) {
    const lesson = window.COURSE_LESSONS.find(item => item.id === figure.lessonId);
    const reading = lesson?.readings.find(item => figure.lessonId === 'intro' ? item.n === figure.target : item.id === figure.target);
    if (!reading) continue;
    if (!grouped.has(reading)) grouped.set(reading, []);
    grouped.get(reading).push(figure);
  }
  for (const [reading, items] of grouped) {
    const markup = items.map(f => {
      const creditLinks = f.creditUrl
        ? ' <a href="' + escape(f.creditUrl) + '" target="_blank" rel="noopener">מקור האיור ↗</a> · <a href="' + escape(f.licenseUrl) + '" target="_blank" rel="noopener">רישיון</a>'
        : '';
      return '<figure class="lecture-figure">' +
        '<a class="lecture-figure-image" href="' + escape(f.file) + '" target="_blank" rel="noopener" aria-label="' + escape(f.title) + ' — פתיחה בגודל מלא בלשונית חדשה">' +
        '<img src="' + escape(f.file) + '" alt="' + escape(f.alt) + '" width="' + f.width + '" height="' + f.height + '" loading="lazy" decoding="async"></a>' +
        '<figcaption><strong>' + escape(f.title) + '</strong><span>' + escape(f.caption) + '</span>' +
        '<span class="lecture-figure-links"><a href="' + escape(f.file) + '" target="_blank" rel="noopener">הגדלת האיור ↗</a> · ' +
        '<a href="' + escape(f.source) + '" target="_blank" rel="noopener">שקופית ' + f.slide + ' במצגת ↗</a></span>' +
        '<small>' + escape(f.credit) + creditLinks + '</small></figcaption></figure>';
    }).join('');
    // Keep related panels together and retain their source order.
    reading.body = reading.body.replace('</p>', '</p>' + markup);
  }
})();
