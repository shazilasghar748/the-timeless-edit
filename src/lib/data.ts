export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  image: string;
  badge?: "Editor's Choice" | "Trending" | "New" | "Popular";
}

export const categories = [
  "Health", "Science", "Technology", "Artificial Intelligence", "Lifestyle",
  "Psychology", "Travel", "Food", "Business", "Books", "Self Improvement",
];

export const posts: Post[] = [
  // ============ HEALTH CATEGORY (20 Articles) ============
  
  {
    slug: "15-warning-signs-iron-deficiency",
    title: "15 Warning Signs of Iron Deficiency Every Woman Should Know",
    excerpt:
      "From persistent fatigue to brittle nails — the subtle signs of low iron that are easy to dismiss but important to catch early.",
    content:
      "Iron deficiency is one of the most common nutritional problems affecting women, yet it often goes undiagnosed because symptoms can be subtle or mistaken for other issues. Women are particularly vulnerable due to menstrual blood loss, pregnancy, and childbirth.\n\n**The Most Common Warning Signs**\n\n**Persistent Fatigue** — This isn't just regular tiredness. It's a deep exhaustion that doesn't improve with rest. Your body lacks enough healthy red blood cells to carry oxygen to tissues, leaving you constantly drained.\n\n**Shortness of Breath** — Everyday activities like climbing stairs or walking short distances may leave you breathless because your blood can't deliver adequate oxygen.\n\n**Dizziness and Lightheadedness** — Feeling faint or actually fainting can occur when your brain doesn't receive enough oxygen-rich blood.\n\n**Cold Hands and Feet** — Poor circulation from reduced oxygen transport can leave your extremities feeling perpetually cold.\n\n**Pale Skin** — Reduced red blood cells means less hemoglobin, which gives skin its healthy pink color. Your complexion, inner eyelids, and nail beds may look noticeably paler.\n\n**Heart Palpitations** — Your heart works harder to pump oxygen-depleted blood, which can cause irregular heartbeats, chest discomfort, or a feeling of fluttering.\n\n**Brittle Nails** — Nails may become thin, brittle, or develop spoon-shaped indentations.\n\n**Hair Loss** — When iron stores are depleted, your body prioritizes essential functions over hair growth, leading to noticeable shedding.\n\n**Unusual Cravings (Pica)** — Cravings for non-food items like ice, dirt, or paper is a bizarre but well-documented sign of iron deficiency.\n\n**Restless Leg Syndrome** — An uncontrollable urge to move your legs, especially at night, can be linked to low iron levels.\n\n**Brain Fog** — Difficulty concentrating, poor memory, and reduced cognitive function often accompany iron deficiency.\n\n**Exercise Intolerance** — You may notice you simply can't handle the same level of physical activity as before.\n\n**Irritability and Mood Changes** — Low iron can affect neurotransmitter function, leading to unexplained moodiness or depression.\n\n**Frequent Infections** — Iron plays a crucial role in immune function, so you might get sick more often.\n\n**Swollen or Sore Tongue** — Inflammation of the tongue or mouth sores can be a sign of severe deficiency.\n\n**What to Do:** If you experience several of these symptoms, ask your doctor for a ferritin and complete blood count test. Iron supplements and dietary changes (red meat, leafy greens, fortified cereals) can help, but always consult a healthcare provider first.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-08-09",
    readingTime: "9 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    badge: "New",
  },
  {
    slug: "vitamin-d-deficiency-women",
    title: "Vitamin D Deficiency in Women: Causes and Symptoms",
    excerpt:
      "Why women are at higher risk — and how to spot the signs before they affect your bones, mood, and overall health.",
    content:
      "Vitamin D is unique — it acts more like a hormone than a vitamin, influencing everything from mood to bone health. Women are at particular risk, with deficiency rates increasing significantly during menopause.\n\n**Why Women Become Deficient**\n\n**Menopause and Estrogen Decline** — Estrogen increases the activity of the enzyme that activates vitamin D. As estrogen levels drop during menopause, vitamin D production decreases dramatically.\n\n**Limited Sun Exposure** — Modern indoor lifestyles, sunscreen use, and living in northern latitudes reduce natural vitamin D synthesis.\n\n**Higher Body Fat** — Vitamin D is fat-soluble and can get trapped in fat tissue, making it less available for use. Overweight women tend to have lower vitamin D levels.\n\n**Pregnancy and Breastfeeding** — Your body's requirements increase significantly during these periods.\n\n**Age** — The skin's ability to produce vitamin D declines with age.\n\n**Symptoms to Watch For**\n\n- Mood Changes — Depression, particularly seasonal affective disorder, is strongly linked to low vitamin D\n- Hot Flashes — Research suggests women with higher vitamin D levels experience fewer hot flashes\n- Bone Pain and Muscle Weakness — Vitamin D is essential for calcium absorption\n- Hair Loss — Deficiency can contribute to thinning hair\n- Fatigue — Even mild deficiency can cause exhaustion\n- Frequent Illness — Vitamin D supports immune function\n\n**What to Do:** Ask your doctor to check your 25-hydroxy vitamin D levels. Supplementation, safe sun exposure, and vitamin D-rich foods (fatty fish, egg yolks, fortified milk) can help restore levels.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-08-08",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
  },
  {
    slug: "understanding-pcos-symptoms-causes-treatment",
    title: "Understanding PCOS: Symptoms, Causes, and Treatment",
    excerpt:
      "The most common hormonal disorder affecting women — now being recognized as a metabolic condition that goes far beyond the ovaries.",
    content:
      "Polycystic Ovary Syndrome — now increasingly referred to as PMOS (Polyendocrine Metabolic Ovarian Syndrome) to better reflect its true nature — affects 7% to 10% of women of reproductive age. Far from being just an ovarian condition, it is a complex metabolic and hormonal disorder.\n\n**Visible Symptoms**\n\n- Excess Hair Growth (Hirsutism) — Unwanted hair on the face, chest, stomach, or back due to elevated male hormones (androgens)\n- Thinning Hair or Baldness — Male-pattern hair loss is common\n- Acne and Oily Skin — Hormonal imbalances wreak havoc on skin\n- Weight Gain — Difficulty losing weight, especially around the abdomen\n- Dark, Velvety Skin Patches — Called acanthosis nigricans, these appear on the neck, underarms, or groin\n\n**Hidden Symptoms**\n\n- Irregular Periods or Missed Periods — You may go months without a period (amenorrhea)\n- Infertility — Irregular ovulation makes conception challenging\n- Enlarged Ovaries — Ultrasound may reveal multiple small follicles\n- Fatigue and Mood Changes — Depression and anxiety are common\n\n**Causes**\n\nThe exact cause is unknown, but it involves a combination of genetic factors, hormonal problems (high androgen and insulin levels), insulin resistance (a core feature making women at high risk for type 2 diabetes), and chronic low-grade inflammation.\n\n**Treatment Approaches**\n\n- Lifestyle Changes — Even a 5% to 10% weight loss can restore ovulation\n- Metformin — Helps manage high blood sugar and insulin levels\n- Birth Control Pills — Regulate periods and reduce androgen symptoms\n- Ovulation Induction — For women trying to conceive\n- Anti-Androgen Medications — Address acne and excess hair growth\n\n**The Name Change Matters:** The shift from PCOS to PMOS recognizes that this is a multisystem condition with serious metabolic implications, including increased risks for diabetes, heart disease, and endometrial cancer.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-08-07",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
    badge: "Editor's Choice",
  },
  {
    slug: "pmos-vs-pcos-whats-the-difference",
    title: "PMOS vs. PCOS: What's the Difference?",
    excerpt:
      "Why experts are changing the name — and what it means for diagnosis, treatment, and awareness.",
    content:
      "Simply put: there is no difference in the condition itself — only in the name. In May 2025, a global consensus of researchers, clinicians, and patient advocates announced a name change from Polycystic Ovary Syndrome (PCOS) to Polyendocrine Metabolic Ovarian Syndrome (PMOS).\n\n**Why the Change?**\n\n**The Old Name Was Misleading** — 'Polycystic' suggests cysts, but women with the condition have follicles — cyst-like structures containing microscopic eggs — not pathological cysts.\n\n**It's Not Just an Ovarian Issue** — The condition affects multiple endocrine organs and metabolism.\n\n**The New Name Better Reflects Reality** — PMOS acknowledges the endocrine, metabolic, and ovarian dysfunction that can result in type 2 diabetes, cardiovascular disease, and obesity.\n\n**The Old Name Caused Confusion and Stigma** — Patients were often misdiagnosed or received fragmented care because the name suggested it was solely a gynecological issue.\n\n**What This Means for You:** The name change does not change how you are treated. Care has always addressed the metabolic component — screening for diabetes, providing nutrition support, and managing symptoms comprehensively. The new name simply helps patients and doctors recognize the full scope of the condition.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-08-06",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
    badge: "New",
  },
  {
    slug: "10-signs-hormonal-imbalance-women",
    title: "10 Signs of Hormonal Imbalance in Women",
    excerpt:
      "From mood swings to sleep disturbances — the subtle signals your body sends when your hormones are out of sync.",
    content:
      "Hormones are your body's chemical messengers, and even minor imbalances can cause significant symptoms. Here are the most common signs:\n\n1. **Irregular or Painful Periods** — Your menstrual cycle is a sensitive barometer of hormonal health. Significant changes in flow, duration, or timing signal an imbalance.\n\n2. **Unexplained Weight Changes** — Sudden weight gain or loss that doesn't correlate with diet or exercise can point to thyroid, insulin, or cortisol issues.\n\n3. **Persistent Fatigue** — Hormonal imbalances, particularly of thyroid hormones or estrogen, can cause debilitating exhaustion.\n\n4. **Mood Swings, Anxiety, or Depression** — Hormones directly affect neurotransmitters. Estrogen influences serotonin, which regulates mood and anxiety.\n\n5. **Hair Thinning or Excessive Hair Growth** — Estrogen protects hair growth; when levels drop, thinning occurs. Excess androgens cause unwanted facial or body hair.\n\n6. **Skin Issues** — Adult acne, excessive dryness, or oiliness often reflect hormonal imbalances.\n\n7. **Sleep Disturbances** — Hot flashes, night sweats, or insomnia are classic signs of perimenopause or thyroid dysfunction.\n\n8. **Low Libido** — Testosterone is not just a male hormone — it affects women's desire too. Estrogen and thyroid issues also affect sex drive.\n\n9. **Hot Flashes and Night Sweats** — These are hallmark symptoms of dropping estrogen levels.\n\n10. **Headaches and Migraines** — Many women experience hormone-related headaches, particularly around their menstrual cycle.\n\n**What to Do:** Don't dismiss these symptoms. A comprehensive hormone panel can identify imbalances and guide effective treatment.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-08-05",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
  },
  {
    slug: "essential-vitamins-before-pregnancy",
    title: "Essential Vitamins to Take Before Pregnancy",
    excerpt:
      "The nutrients your body needs to build a strong foundation — starting at least one month before conception.",
    content:
      "Preconception health is crucial — the foundation for a healthy pregnancy begins before conception. Your body needs to build nutrient stores to support both you and your developing baby.\n\n**Folic Acid (400–600 mcg daily)** — This is the most critical nutrient to start before pregnancy. Folic acid helps prevent neural tube defects, which occur in the first few weeks of pregnancy — often before you even know you're pregnant. Natural folate is found in leafy greens and beans, but supplements ensure you get enough.\n\n**Iron** — Your blood volume increases significantly during pregnancy, and iron is essential for red blood cell production. It supports the placenta and fetal development. Start building your stores before conception.\n\n**Calcium** — Your baby's bones and teeth develop rapidly in the second and third trimesters. If you don't consume enough calcium, your body will leach it from your bones.\n\n**Vitamin D** — Works with calcium to build strong bones and supports immune function. Many women are deficient before pregnancy.\n\n**Omega-3 Fatty Acids** — Crucial for fetal brain and nervous system development. Most prenatal vitamins don't contain enough, so consider a separate supplement.\n\n**Choline (450 mg daily)** — A critical nutrient for fetal brain development that most women don't get enough of. Good food sources include eggs and lean meats.\n\n**When to Start:** Doctors recommend starting prenatal vitamins at least one month before trying to conceive.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-08-04",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800",
  },
  {
    slug: "vitamin-b12-deficiency-women",
    title: "Why Vitamin B12 Deficiency Is Common in Women",
    excerpt:
      "The overlooked deficiency that affects energy, mood, and neurological health — especially in women over 50 and plant-based eaters.",
    content:
      "Vitamin B12 is essential for red blood cell formation, neurological function, and DNA synthesis. Yet many women are deficient, often without knowing it.\n\n**Why Women Are at Risk**\n\n**Vegetarian and Vegan Diets** — B12 is naturally found only in animal products (meat, fish, eggs, dairy). Women following plant-based diets are particularly vulnerable.\n\n**Pregnancy and Breastfeeding** — B12 requirements increase significantly during these periods.\n\n**Age** — Absorption decreases with age due to reduced stomach acid.\n\n**Digestive Issues** — Conditions like Crohn's disease or celiac disease impair B12 absorption.\n\n**Autoimmune Conditions** — Pernicious anemia, an autoimmune condition, prevents B12 absorption.\n\n**Symptoms**\n\n- Fatigue and Weakness — B12 deficiency causes megaloblastic anemia, where red blood cells are enlarged and inefficient\n- Neurological Problems — Numbness, tingling in hands and feet, balance issues, and memory problems\n- Mood Changes — Depression, irritability, and cognitive decline\n- Pale or Jaundiced Skin — Anemia affects skin color\n\n**Takeaway:** If you follow a vegetarian or vegan diet, are over 50, or have digestive issues, ask your doctor to check your B12 levels. Supplements or injections can correct deficiencies.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-08-03",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
  },
  {
    slug: "thyroid-symptoms-you-shouldnt-ignore",
    title: "Thyroid Symptoms You Shouldn't Ignore",
    excerpt:
      "The signs your thyroid might be out of balance — and why pregnancy and postpartum are high-risk times.",
    content:
      "Thyroid conditions are more common in women, but symptoms can be subtle and easily dismissed as stress, hormones, or aging.\n\n**When Things Slow Down (Underactive Thyroid/Hypothyroidism)**\n\n- Fatigue — Exhaustion that doesn't match your activity level\n- Unexplained Weight Gain — Despite no changes in diet or exercise\n- Persistent Constipation — Sluggish digestion\n- Feeling Cold — Intolerance to cold temperatures\n- Heavier Periods — Changes in menstrual flow\n\n**When Things Speed Up (Overactive Thyroid/Hyperthyroidism)**\n\n- Rapid or Irregular Heartbeat — Palpitations or racing heart\n- Feeling Hot — Heat intolerance\n- Shakiness or Tremor — Fine hand tremors\n- Unintentional Weight Loss — Despite increased appetite\n- Anxiety or Restlessness — Feeling wired or agitated\n\n**When to See a Doctor**\n\n- Symptoms last more than a few weeks\n- Fatigue interferes with daily life\n- Weight, heart rate, or temperature changes don't make sense\n- Menstrual changes occur alongside other symptoms\n- You're pregnant or recently had a baby and symptoms feel new\n\n**Critical Note:** Pregnancy and postpartum are high-risk times. Some women develop postpartum thyroiditis in the first year after giving birth.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-08-02",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800",
  },
  {
    slug: "reasons-for-irregular-periods",
    title: "Reasons for Irregular Periods",
    excerpt:
      "From stress to hormonal conditions — the most common causes and when to see a doctor.",
    content:
      "A 'regular' menstrual cycle ranges from 24 to 38 days. Irregular cycles include bleeding that's too frequent, too infrequent, unusually heavy or light, or lasts too long.\n\n**Common Causes**\n\n- **Pregnancy** — The most obvious cause for a missed period\n- **PMOS/PCOS** — Affects androgen production, causing irregular cycles\n- **Thyroid Disorders** — Both overactive and underactive thyroid affect menstruation\n- **Extreme Weight Changes** — Significant weight gain or loss disrupts hormones\n- **Excessive Exercise** — Low body fat can stop ovulation\n- **Stress** — Chronic stress affects the hypothalamus, which regulates periods\n- **Endometriosis** — Causes heavy bleeding and pain\n- **Pelvic Inflammatory Disease** — Can cause irregular bleeding\n- **Uterine Fibroids** — Benign growths causing excessive bleeding\n- **Perimenopause** — Irregular periods are common in the years leading to menopause\n\n**When to See a Doctor:** If your cycle is consistently outside the 24-38 day range, bleeding is extremely heavy (soaking through a pad every two hours), or you're bleeding between periods, consult a healthcare provider.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-08-01",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800",
  },
  {
    slug: "easy-ways-to-prevent-anemia",
    title: "Easy Ways to Prevent Anemia",
    excerpt:
      "Simple dietary strategies to keep your iron levels healthy — and when supplements might be needed.",
    content:
      "Anemia occurs when you don't have enough healthy red blood cells to carry oxygen to your body's tissues. The most common cause is iron deficiency, but it's highly preventable.\n\n**1. Eat Iron-Rich Foods**\n\n- Red Meat — Beef, lamb, pork\n- Poultry — Chicken and turkey\n- Fish and Seafood\n- Legumes — Beans, lentils, chickpeas\n- Leafy Greens — Spinach and kale\n- Fortified Cereals — Many breakfast cereals have added iron\n- Nuts and Seeds — Pumpkin seeds and cashews\n\n**2. Pair Iron with Vitamin C**\n\nVitamin C enhances iron absorption. Combine them in one meal:\n\n- Orange juice with breakfast cereal\n- Beans cooked with tomatoes\n- Salsa on tacos\n- Fruit with cereal\n\n**3. Avoid Iron Blockers**\n\nCalcium and tannins (in tea and coffee) can inhibit iron absorption. Avoid consuming these close to iron-rich meals.\n\n**4. Consider Supplements**\n\nIf you're at high risk (heavy periods, pregnancy, vegetarian diet), talk to your doctor about iron supplements.\n\n**5. Treat Underlying Causes**\n\nIf you have heavy menstrual bleeding, address it with your healthcare provider.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-31",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
  },
  {
    slug: "healthy-pregnancy-diet",
    title: "Healthy Pregnancy Diet: What to Eat",
    excerpt:
      "A practical guide to nourishing yourself and your baby — including what to include and what to avoid.",
    content:
      "A balanced pregnancy diet doesn't have to be perfect, but focusing on nutrient-rich foods supports both you and your baby.\n\n**What to Include**\n\n**Protein** — Essential for baby's growth and building the placenta, uterus, and maternal tissues. Good sources include lean meats, poultry, fish, eggs, tofu, beans, lentils, nuts, seeds, and Greek yogurt.\n\n**Whole Grains** — Provide fiber, B vitamins, and steady energy: oatmeal, brown rice, quinoa, whole wheat bread, whole grain pasta.\n\n**Colorful Fruits and Vegetables** — Rich in vitamins, minerals, antioxidants, and fiber: leafy greens, broccoli, bell peppers, sweet potatoes, berries, citrus fruits, avocados.\n\n**Dairy or Fortified Alternatives** — For calcium to support baby's bones and teeth: milk, yogurt, cheese, fortified plant-based alternatives.\n\n**Iron-Rich Foods** — Important as blood volume increases: lean red meat, poultry, beans, lentils, fortified cereals, spinach.\n\n**What to Avoid**\n\n- Raw or Undercooked — Eggs, meat, poultry, fish, shellfish, sprouts\n- Unpasteurized Products — Milk, cheese, yogurt, juice\n- High-Mercury Fish — Shark, swordfish, king mackerel, tilefish\n- Alcohol — No safe amount during pregnancy\n- Excessive Liver Products — Too much vitamin A\n- Limit Caffeine — No more than 200 mg daily (about one 12-ounce coffee)",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-30",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
  },
  {
    slug: "best-foods-for-normal-delivery",
    title: "Best Foods for a Normal Delivery",
    excerpt:
      "Traditional foods that may support labor preparation — and what science says about their effectiveness.",
    content:
      "While no food guarantees a normal delivery, certain foods may support labor preparation and make the process smoother.\n\n**Foods That May Help**\n\n**Ghee** — A healthy fat source containing medium-chain fatty acids that provide easily available energy. In the ninth month, consuming 4-5 teaspoons daily may help.\n\n**Dates and Milk** — Dates contain compounds that may increase oxytocin production, the hormone responsible for uterine contractions during labor.\n\n**Turmeric Milk** — May reduce pregnancy-related inflammation and discomfort, but moderation is key.\n\n**Eggs** — Excellent protein source for building strength and tissue.\n\n**General Principles** — Throughout pregnancy, ensure adequate protein, vitamins, and minerals. Your calorie needs increase by about 450-500 calories daily.\n\n**Important:** Always consult your healthcare provider before making significant dietary changes in late pregnancy.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-29",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
  },
  {
    slug: "what-changes-during-menopause",
    title: "What Changes Happen During Menopause?",
    excerpt:
      "The physical changes, symptom timeline, and why vitamin D becomes even more important.",
    content:
      "Menopause is defined as one full year after your last menstrual period. The changes can be rapid and significant.\n\n**Physical Changes**\n\n**Vaginal and Uterine Changes** — Tissues of the labia, clitoris, vagina, and urethra become thin (atrophy), leading to irritation and dryness. The uterus, fallopian tubes, and ovaries shrink.\n\n**Pelvic Support Changes** — Reduced muscle and connective tissue support can lead to pelvic organ prolapse — a feeling of pelvic pressure or fullness, difficulty urinating, or incontinence.\n\n**Breast Changes** — Breasts decrease in size, lose support, and become less firm as glandular tissue is replaced with fat.\n\n**Skin and Hair Changes** — Thinning skin, reduced elasticity, and hair changes are common.\n\n**Symptom Timeline**\n\n- Hot flashes can persist for 4 to 10 years after the last period\n- Vaginal dryness can cause pain during sexual activity\n- Libido may decrease\n\n**The Vitamin D Connection**\n\nVitamin D levels drop significantly during menopause, potentially worsening hot flashes and mood symptoms. Supplementation may help.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-28",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
  },
  {
    slug: "main-causes-of-hair-loss-in-women",
    title: "Main Causes of Hair Loss in Women",
    excerpt:
      "Hormonal shifts, nutritional gaps, and other factors behind the thinning that affects 40% of women by age 50.",
    content:
      "Hair loss in women is often more distressing than in men because it's less expected — yet about 40% of women experience it by age 50. Unlike men's receding hairlines, women typically experience overall thinning.\n\n**Hormonal Causes**\n\n**Menopause** — Estrogen helps keep hair in its growth phase. When estrogen drops, hair loss often accelerates.\n\n**PMOS/PCOS** — Excess androgens cause male-pattern thinning.\n\n**Thyroid Disorders** — Both hypothyroidism and hyperthyroidism affect hair growth cycles.\n\n**Pregnancy** — Postpartum hair shedding is common as hormone levels normalize.\n\n**Nutritional Causes**\n\n**Iron Deficiency** — Hair is non-essential, so your body diverts iron to vital organs first.\n\n**Vitamin D Deficiency** — Plays a role in the hair growth cycle.\n\n**B12 Deficiency** — Affects cell division, including hair follicle cells.\n\n**Other Causes**\n\n**Genetics** — Family history is a strong predictor.\n\n**Stress** — Telogen effluvium, where stress pushes hair into the shedding phase.\n\n**Styling Practices** — Tight hairstyles cause traction alopecia.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-27",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
  },
  {
    slug: "postpartum-body-recovery",
    title: "How to Recover Your Body After Childbirth",
    excerpt:
      "What to expect physically and emotionally — and why patience is your most important recovery tool.",
    content:
      "The postpartum period requires patience and self-care. Your body has undergone nine months of changes — recovery takes time.\n\n**Rest and Pace Yourself**\n\nThe first few days at home are for rest and recovery — physically and emotionally. Limit visitors, nap when the baby naps, and accept help.\n\n**Physical Changes to Expect**\n\n**Vaginal Discharge (Lochia)** — Tissue and blood that lined your uterus. Heavy and bright red at first, becoming lighter until it disappears after a few weeks.\n\n**Swelling** — Your legs and feet may be swollen. Keep them elevated when possible.\n\n**Constipation** — Drink plenty of water and eat fresh fruits and vegetables.\n\n**Cramping** — Menstrual-like cramps are common, especially if breastfeeding.\n\n**Breast Changes** — Your milk comes in within 3-6 days. Breasts may feel full, tender, or uncomfortable.\n\n**Thyroid Watch**\n\nSome women develop postpartum thyroiditis in the first year. Symptoms (fatigue, sleep problems, weight changes) are easy to overlook because they're common after birth. Talk to your doctor if symptoms persist.\n\n**Gradual Weight Loss**\n\nYou'll lose about 10 pounds right away, then more as fluid levels decrease. Don't try to lose additional weight quickly. Gradual loss over several months is safest, especially if breastfeeding.\n\n**The Baby Blues**\n\nMany new mothers feel sad, weepy, and overwhelmed for a few days. Changing hormones, anxiety, and sleep deprivation contribute. If these feelings persist beyond two weeks, contact your healthcare provider.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-26",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
  },
  {
    slug: "best-foods-to-strengthen-bones",
    title: "Best Foods to Strengthen Your Bones",
    excerpt:
      "The nutrients that keep your skeleton strong — especially important as estrogen levels drop during menopause.",
    content:
      "Bone health is critical for women, especially as estrogen levels drop during menopause. Estrogen protects bones — when levels decline, bone density decreases rapidly.\n\n**Calcium-Rich Foods**\n\n- Dairy — Milk, yogurt, cheese\n- Fortified Alternatives — Soy milk, almond milk\n- Leafy Greens — Kale, collard greens\n- Sardines and Salmon — With bones\n- Tofu — Calcium-set varieties\n\n**Vitamin D Sources**\n\nVitamin D is essential for calcium absorption:\n\n- Fatty fish (salmon, mackerel)\n- Egg yolks\n- Fortified milk and cereals\n- Safe sun exposure\n\n**Other Bone-Building Nutrients**\n\n- Vitamin K — Leafy greens, broccoli\n- Magnesium — Nuts, seeds, whole grains\n- Protein — Adequate protein supports bone structure",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-25",
    readingTime: "4 min read",
    image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=800",
  },
  {
    slug: "why-folic-acid-is-important",
    title: "Why Folic Acid Is So Important",
    excerpt:
      "The B-vitamin that cuts neural tube defect risk by 70% — and why you need it before you know you're pregnant.",
    content:
      "Folic acid is the synthetic form of folate, a B-vitamin naturally found in leafy greens, beans, and citrus fruits. It is absolutely critical for preventing birth defects.\n\n**The Critical Role**\n\n**Neural Tube Defect Prevention** — The neural tube forms the baby's brain and spinal cord. This development happens in the first few weeks of pregnancy — before most women know they're pregnant. Folic acid reduces the risk of neural tube defects by up to 70%.\n\n**Red Blood Cell Production** — Folic acid is essential for making red blood cells and preventing anemia.\n\n**Cell Division** — It's required for DNA synthesis and cell division, making it critical for the rapid cell growth during pregnancy.\n\n**Recommendations**\n\n- **Preconception** — 400–600 mcg daily starting at least one month before conception\n- **Pregnancy** — Continue throughout pregnancy\n- **Food Sources** — Leafy greens, beans, asparagus, oranges, fortified cereals, and grains",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-24",
    readingTime: "4 min read",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800",
  },
  {
    slug: "signs-of-magnesium-deficiency",
    title: "Signs of Magnesium Deficiency",
    excerpt:
      "The mineral involved in over 300 reactions — and the signs that you might be running low.",
    content:
      "Magnesium is involved in over 300 biochemical reactions in the body. Deficiency is more common than many realize.\n\n**Common Signs**\n\n- **Muscle Cramps and Twitches** — Magnesium is essential for muscle relaxation\n- **Fatigue and Weakness** — Low energy is a primary symptom\n- **Sleep Problems** — Magnesium helps regulate melatonin\n- **Anxiety and Irritability** — It plays a role in nervous system regulation\n- **Irregular Heartbeat** — Magnesium supports heart rhythm\n- **High Blood Pressure** — Deficiency is linked to hypertension\n- **Migraines** — Low magnesium is associated with increased migraine frequency\n\n**At-Risk Groups**\n\n- Women with heavy menstrual bleeding\n- Pregnant and breastfeeding women\n- Women with digestive disorders\n- Women taking certain medications\n\n**Food Sources**\n\n- Nuts and seeds (pumpkin seeds, almonds)\n- Leafy greens (spinach)\n- Legumes (black beans, lentils)\n- Whole grains\n- Dark chocolate",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-23",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
  },
  {
    slug: "common-causes-of-infertility",
    title: "Common Causes of Infertility",
    excerpt:
      "Understanding the factors that affect fertility — from ovulation disorders to lifestyle choices.",
    content:
      "Infertility affects millions of women. Understanding common causes can help guide appropriate evaluation and treatment.\n\n**Ovulation Disorders (Most Common)**\n\n- **PMOS/PCOS** — The most common cause of ovulatory infertility\n- **Hypothalamic Dysfunction** — Stress, excessive exercise, or eating disorders can disrupt ovulation\n- **Premature Ovarian Insufficiency** — Ovaries stop producing eggs early\n\n**Tubal Factors**\n\n- **Blocked Fallopian Tubes** — Often from pelvic inflammatory disease, endometriosis, or prior surgery\n- **Endometriosis** — Endometrial tissue grows outside the uterus, affecting fertility\n\n**Uterine Factors**\n\n- **Uterine Fibroids** — Benign growths that can interfere with implantation\n- **Uterine Polyps** — Growths in the uterine lining\n- **Congenital Anomalies** — Structural issues with the uterus\n\n**Lifestyle Factors**\n\n- **Age** — Fertility declines with age, especially after 35\n- **Weight** — Both underweight and obesity affect ovulation\n- **Smoking** — Damages eggs and reduces fertility\n- **Alcohol** — Affects hormone levels\n\n**Male Factor Infertility**\n\nAbout one-third of infertility cases involve male factors, including low sperm count, poor motility, or abnormal morphology.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-22",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
  },
  {
    slug: "what-to-know-before-ivf",
    title: "What to Know Before IVF",
    excerpt:
      "A practical guide to the procedure, success rates, costs, and the questions you should ask your doctor.",
    content:
      "In Vitro Fertilization (IVF) is a major medical procedure. Being prepared can reduce stress and improve outcomes.\n\n**What IVF Involves**\n\n1. **Ovarian Stimulation** — Fertility medications stimulate multiple eggs to develop\n2. **Egg Retrieval** — Mature eggs are collected through a minor surgical procedure\n3. **Fertilization** — Eggs are fertilized with sperm in the lab\n4. **Embryo Transfer** — One or more embryos are placed in the uterus\n5. **Pregnancy Test** — About two weeks after transfer\n\n**Success Rates**\n\nIVF success rates vary significantly by age. Women under 35 have the highest success rates; rates decline with age.\n\n**Key Considerations**\n\n- **Multiple Cycles** — Many women need more than one cycle to achieve pregnancy\n- **Cost** — IVF is expensive and often not fully covered by insurance\n- **Emotional Impact** — The process can be emotionally and physically demanding\n- **Not a Guarantee** — Success is not guaranteed; be prepared for either outcome\n\n**Questions to Ask Your Doctor**\n\n- What are my individual success rates based on my age and health?\n- What are the risks and side effects?\n- How many embryos will be transferred?\n- What are the costs, including medications?\n- What support services are available?",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-21",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
  },

  // ============ OTHER CATEGORIES ============

  {
    slug: "quiet-return-of-analog-living",
    title: "The Quiet Return of Analog Living",
    excerpt:
      "Why slower rituals are reshaping how we spend evenings at home.",
    content:
      "Across cities, a small but growing number of people are trading screens for paper — notebooks, film cameras, printed photographs. It isn't nostalgia so much as a search for friction in a frictionless world...",
    category: "Lifestyle",
    author: "Javeria Mughal",
    date: "2026-07-15",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
    badge: "Editor's Choice",
  },
  {
    slug: "inside-the-new-space-economy",
    title: "Inside the New Space Economy",
    excerpt:
      "What commercial launches this year mean for the next decade.",
    content:
      "Private launch costs have fallen for six consecutive years. What used to be a government-only frontier is now a crowded commercial race, and the implications reach far beyond orbit...",
    category: "Science",
    author: "Javeria Mughal",
    date: "2026-07-14",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    badge: "Trending",
  },
  {
    slug: "short-history-of-sunday-dinner",
    title: "A Short History of Sunday Dinner",
    excerpt:
      "Tracing one ritual across a century of changing family life.",
    content:
      "The Sunday roast, the family table, the unhurried afternoon — where did it come from, and why does it keep resurfacing every time life speeds up again?",
    category: "Food",
    author: "Javeria Mughal",
    date: "2026-07-13",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800",
    badge: "New",
  },
  {
    slug: "ai-in-everyday-decisions",
    title: "How AI Quietly Entered Everyday Decisions",
    excerpt:
      "From playlists to portfolios, the invisible layer making choices for us.",
    content:
      "Most people interact with a recommendation algorithm dozens of times a day without noticing. What happens when that invisible layer starts shaping bigger decisions?",
    category: "Artificial Intelligence",
    author: "Javeria Mughal",
    date: "2026-07-12",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    badge: "Popular",
  },
  {
    slug: "psychology-of-morning-routines",
    title: "The Psychology of Morning Routines",
    excerpt:
      "Why the first hour of the day carries so much weight.",
    content:
      "Behavioral scientists have long studied why mornings feel disproportionately important — and how a handful of small choices ripple through the rest of the day.",
    category: "Psychology",
    author: "Javeria Mughal",
    date: "2026-07-11",
    readingTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  },
  {
    slug: "the-case-for-boring-finance",
    title: "The Case for Boring Finance",
    excerpt:
      "Why the least exciting strategy is usually the one that works.",
    content:
      "Financial media rewards drama. Long-term outcomes rarely do. A look at why patience remains the most undervalued asset in personal finance.",
    category: "Business",
    author: "Javeria Mughal",
    date: "2026-07-10",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  },
  {
    slug: "essential-womens-health-guide",
    title: "Essential Women's Health Guide: From Nutritional Deficiencies to Hormonal Balance",
    excerpt:
      "A comprehensive look at 20 critical health topics every woman should understand — from subtle nutritional deficiencies to major hormonal conditions.",
    content:
      "Women's health is a complex, multifaceted journey that evolves through every stage of life. From the reproductive years to menopause and beyond, understanding your body's signals can make the difference between struggling in silence and finding effective solutions. This comprehensive guide explores 20 critical health topics every woman should understand, from subtle nutritional deficiencies to major hormonal conditions.",
    category: "Health",
    author: "Javeria Mughal",
    date: "2026-07-13",
    readingTime: "18 min read",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
    badge: "Editor's Choice",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string) {
  return posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getRecentPosts(limit: number = 6) {
  return posts.slice(0, limit);
}

export function getFeaturedPosts() {
  return posts.filter((p) => p.badge);
}
