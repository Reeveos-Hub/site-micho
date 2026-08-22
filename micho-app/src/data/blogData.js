const U = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const posts = [
  {
    slug: 'sheffield-crookes-turkish-restaurant',
    title: "Why Sheffield's Crookes Has One of England's Best Turkish Restaurants",
    category: 'Sheffield',
    date: '12 May 2026',
    dateISO: '2026-05-12',
    readTime: '5 min read',
    excerpt: "Sarah had eaten at three Turkish restaurants that year. None of them made her colleague bring them up twice in the same week.",
    hero: U('1555396273-367ea4eb4db5'),
    heroAlt: 'Micho Turkish Bar and Grill on Crookes Road, Sheffield',
    brief: [
      "Crookes is a residential neighbourhood in Sheffield S10, not a restaurant district, which means every customer travels there deliberately.",
      "Micho opened at 200 Crookes in November 2025. The restaurant is named after Micho, the chef, who brings twenty-five years of Turkish culinary experience to Sheffield.",
      "Regular customers from Broomhill, Walkley and Crookesmoor come because the food earns the drive, not because the restaurant is on their doorstep.",
      "The charcoal grill runs at every service and the meze is prepared fresh each day."
    ],
    content: [
      { type: 'h2', text: "The drive nobody expects to make" },
      { type: 'p', text: "Sarah had eaten at three Turkish restaurants that year. One in Kelham Island, one on Ecclesall Road, one somewhere near the Moor she could not remember the name of. They were all good. None of them made her colleague bring them up twice in the same week. That was what made her notice. Not a recommendation exactly. Just a mention, and then another mention, unprompted, a few days later. The place was called Micho. It was in Crookes. She did not know Crookes." },
      { type: 'p', text: "Crookes is not where you go looking for a restaurant. It is a residential neighbourhood on the western edge of Sheffield, above Broomhill, north of Fulwood, the kind of place you know if you live there or if someone brought you there once. You can get the number 51 bus from the city centre. Most people drive. There is no restaurant district to speak of. That is the question Sarah sat with as she drove up from Kelham Island. Why here? She would not have an answer until she sat down." },
      { type: 'h2', text: "What the neighbourhood does" },
      { type: 'p', text: "The answer, when it comes, is not about location. It is about what location demands. A restaurant in Crookes cannot survive on foot traffic or on novelty. There is no Saturday afternoon crowd wandering past looking for somewhere to eat. The customers who come to Micho at 200 Crookes come because they have decided to come. They are regulars from Broomhill, from Walkley, from Crookesmoor. On a Wednesday evening they come in knowing exactly what they want. Some have been coming for years." },
      { type: 'p', text: "That is not sentiment. That is a commercial filter. A restaurant that builds a loyal local following in a residential street has done something a restaurant on a busy road does not have to do. It has given people a reason to return when returning requires effort." },
      { type: 'h2', text: "What Micho brings to it" },
      { type: 'p', text: "The restaurant is named after Micho, the chef. He has twenty-five years of Turkish culinary experience, and the decisions that matter most in a kitchen have already been made: gas or charcoal, fresh or bought-in, how meze is prepared and when. Those decisions are not made fresh every service. They were made over twenty-five years. The grill runs on charcoal. The meze goes out fresh. Monday, Wednesday through Friday from four in the afternoon. Saturday and Sunday from noon." },
      { type: 'p', text: "Sarah sat at her table that evening and worked through the meze first. Cacik, Patlican Tarator, warm bread. Then the grill. The smoke from the charcoal had gone into the meat in the way it only can when the coals have been burning long enough and the fat has dripped down into them and come back up as something else entirely." },
      { type: 'blockquote', text: "A residential street does not reward novelty. It rewards a reason to return. Every table that comes back has made a deliberate choice. That is the only review that matters." },
      { type: 'h2', text: "Why it is worth the drive" },
      { type: 'p', text: "We are at 200 Crookes, S10 1TG. We are not on a main road, and we are not trying to be. Come on a Wednesday evening if you want the room to yourselves. Come Saturday lunchtime if you want the full service. Take the number 51 from the city centre if you do not want to park. Either way, you will understand why your colleague mentioned it twice." }
    ],
    faq: [
      { q: "Where exactly is Micho in Sheffield?", a: "We are at 200 Crookes, Sheffield, S10 1TG. The number 51 bus runs from the city centre and takes around 20 minutes. By car, head north-west from the city along Crookes Valley Road." },
      { q: "Do I need to book a table?", a: "For Friday and Saturday evenings, yes. Walk-ins are welcome at quieter times but weekend evenings fill quickly. Call +44 114 349 2043 or book online." },
      { q: "What days and times is Micho open?", a: "Monday, Wednesday, Thursday and Friday from 4pm. Saturday and Sunday from 12pm. Closed Tuesdays." },
      { q: "Why is a great Turkish restaurant in a residential neighbourhood?", a: "Because a residential neighbourhood filters out the casual visitor. Every table at Micho has made a deliberate decision to be there. That filter, a street that requires intent to find, is what keeps the standard where it is." }
    ],
    related: ['25-years-behind-the-grill', 'saturday-in-crookes']
  },

  {
    slug: 'what-makes-real-adana-kebab',
    title: "What Makes a Real Adana Kebab? The Sheffield Kitchen That's Still Getting It Right",
    category: 'From the Kitchen',
    date: '9 May 2026',
    dateISO: '2026-05-09',
    readTime: '6 min read',
    excerpt: "Ayse had eaten Adana kebab in Adana. Back in Britain, she tried four restaurants. None of them were the same. She began to ask the question properly.",
    hero: U('1544025162-d76694265947'),
    heroAlt: 'Adana kebab on a charcoal grill with smoke rising',
    brief: [
      "Authentic Adana kebab requires hand-minced lamb shoulder rather than machine-processed mince, which determines the texture of the finished dish.",
      "Tail fat from a fat-tailed sheep melts from inside the meat during cooking, keeping it moist on a long, hot grill in a way other cuts cannot.",
      "When fat drips onto charcoal it combusts and the smoke rises back through the meat, adding flavour that cannot be replicated with gas.",
      "A gas grill burns clean and the fat falls away without combusting, so the smoke loop does not happen and the flavour of Adana kebab changes."
    ],
    content: [
      { type: 'h2', text: "The gap she could not close" },
      { type: 'p', text: "Ayse had eaten Adana kebab in Adana. Not a Turkish restaurant in London, not a takeaway approximation on a high street, but the actual dish in the city it comes from, on the Cukurova plain in south-eastern Turkey, near the Syrian border, in August, at a restaurant where the coals had been lit before the kitchen opened and the smoke had been in the room all day. She knew what it tasted like. That was the problem." },
      { type: 'p', text: "Back in Britain, she tried four restaurants over two years. Each one described itself as authentic. Each one served a skewer of spiced minced lamb on flatbread with salad. All of them were, she would admit, fine. None of them were the same. She could not isolate the difference. It was something in the texture of the meat, something in the way the fat behaved when it was hot, something that arrived in the first bite and then stayed, or did not stay, depending on where you were eating." },
      { type: 'h2', text: "The three things nobody tells you" },
      { type: 'p', text: "The first is the cut. Adana kebab uses lamb shoulder, minced by hand. Not machine-minced, but shoulder worked by hand to a specific texture that is coarse and dense without becoming a paste. The texture determines how the kebab holds on the skewer, how it develops a crust on the outside while staying loose inside." },
      { type: 'p', text: "The second is the fat. Genuine Adana uses tail fat from a fat-tailed sheep, a breed common across central and south-eastern Turkey but less so in British supply chains. Tail fat has a higher melting point than the fat in a standard British lamb. It bastes the meat from inside as it cooks rather than simply running off. This is why the original stays moist on a long, hot grill without disintegrating. Without it, you are compensating with technique, and the technique is never quite enough. The third is the heat source. This is the one nobody mentions." },
      { type: 'h2', text: "What the charcoal actually does" },
      { type: 'p', text: "Charcoal does not just provide heat. When fat drips from the meat onto hot coals, it vaporises. That vapour rises back into the meat as smoke. That smoke is not a flavour added on top of the cooking. It is part of the cooking. It is what Ayse was tasting in Adana in August and not tasting in the restaurants she tried in Britain." },
      { type: 'p', text: "Gas grills do not do this. A gas flame burns clean. The fat that drips from a gas-grilled skewer falls away. Nothing comes back. The result is a perfectly cooked piece of meat that is missing the thing that makes Adana taste like Adana." },
      { type: 'blockquote', text: "The smoke is not decoration. It is a chemical event. Fat hits coal, vaporises, rises back into the meat. Without charcoal, that event does not happen. The dish is not the same dish." },
      { type: 'h2', text: "What we do at Micho" },
      { type: 'p', text: "Our charcoal grill runs every service. The Adana at Micho is £17.50. It comes with bulgur wheat and salad. The fat goes into the coals and the smoke comes back. If you want to share, the mixed grill for two is £60. But if you want to understand what the charcoal question is actually about, the Adana is where to start. Ayse came to us after a friend mentioned us. She ate the Adana, said nothing about the search that had brought her there, and ordered the same thing again the following week." }
    ],
    faq: [
      { q: "What makes Adana kebab different from other minced lamb kebabs?", a: "Three things: hand-minced lamb shoulder (not machine-ground), tail fat from a fat-tailed sheep which bastes the meat from inside during cooking, and direct charcoal heat which produces a smoke loop that gas grills cannot replicate." },
      { q: "How much is the Adana kebab at Micho?", a: "£17.50, served with bulgur wheat and salad. It is also included in the mixed grill for two at £60." },
      { q: "Why does charcoal make such a difference to kebabs?", a: "When fat drips onto charcoal it combusts and the smoke rises back through the meat. Gas grills do not produce this. The flavour difference is significant and cannot be replicated with a marinade." },
      { q: "Is Adana kebab spicy?", a: "It contains red pepper flakes, so there is heat. Our version is well-seasoned without being aggressively hot. Let your server know if you are sensitive to spice." }
    ],
    related: ['gas-vs-charcoal-grill', 'what-regulars-know']
  },

  {
    slug: '25-years-behind-the-grill',
    title: "Twenty-Five Years Behind the Grill: The Experience That Built Micho's Kitchen",
    category: 'Our Story',
    date: '6 May 2026',
    dateISO: '2026-05-06',
    readTime: '5 min read',
    excerpt: "When we opened in November 2025, the question of gas or charcoal was not a difficult one. Twenty-five years of cooking had already answered it.",
    hero: U('1414235077428-338989a2e8c0'),
    heroAlt: 'Charcoal grill with flames at Micho Turkish Bar and Grill',
    brief: [
      "Micho opened at 200 Crookes in November 2025. The restaurant is named after Micho the chef, who has twenty-five years of Turkish culinary experience in professional kitchens.",
      "Charcoal costs more to run than gas, takes longer to reach temperature, and requires active management throughout service with no thermostat.",
      "Twenty-five years of cooking experience is what makes the charcoal decision straightforward: the difference in the food is not subtle.",
      "Sutlac and Baklava are made in-house every service, alongside freshly prepared meze, because the alternatives are worse."
    ],
    content: [
      { type: 'h2', text: "The decision and what it cost" },
      { type: 'p', text: "When Micho opened at 200 Crookes in November 2025, the question of gas or charcoal was not a difficult one. The restaurant is named after the chef, Micho, and after twenty-five years of cooking Turkish food in professional kitchens, he had already answered it many times. Gas is cheaper. Gas is easier to manage, faster to heat, simpler to control. For a new restaurant in a residential neighbourhood with no guarantee of footfall, choosing gas made straightforward commercial sense. We chose charcoal." },
      { type: 'p', text: "This is not a romantic story about tradition. It is a practical story about a hard choice. Charcoal takes longer to reach cooking temperature. It requires more attention during service. It is more expensive to source and more labour-intensive to manage. Every service, someone at Micho lights the grill early, tends it, judges the heat, manages the coals as the evening progresses. There is no dial to turn. The reason we chose it anyway was simple: the food tastes different. The smoke that rises from fat dripping onto live coals goes back into the meat. That is not available on gas." },
      { type: 'h2', text: "What twenty-five years of experience builds" },
      { type: 'p', text: "Micho has worked in professional kitchens for twenty-five years. He does not need to experiment with the charcoal question. The answer is already known. What that experience builds is not hesitation about the hard decisions, but certainty about them. The meze at Micho is prepared fresh every service. The Sutlac and the Baklava are made in-house. These are not gestures toward authenticity. They are the decisions of a kitchen that has learned what the difference between right and wrong actually tastes like, and has chosen accordingly." },
      { type: 'blockquote', text: "Twenty-five years of cooking teaches you that the difficult decisions are usually the correct ones. Gas is easier. Charcoal is better. That is the whole argument." },
      { type: 'h2', text: "The kitchen that has not changed its mind" },
      { type: 'p', text: "We make our own Sutlac at £4.95. We make our own Baklava at £5.95. These are not gestures toward authenticity. They are the products of a kitchen that knows what the alternative tastes like and has rejected it. The meze comes fresh each service. The cacik, the Patlican Tarator, the warm bread alongside. This adds time and cost. It is also the reason it tastes the way it does." },
      { type: 'h2', text: "What experience actually means" },
      { type: 'p', text: "Experience is not the achievement. Experience is the evidence. The achievement is a charcoal grill chosen because twenty-five years of cooking made the answer obvious. A kitchen that makes its own desserts because the alternative is worse. A room in a residential Sheffield neighbourhood that fills on a Wednesday evening with people who drove there on purpose. We are at 200 Crookes. The grill will be lit. The meze will be fresh. That is the only promise we make and the only one that matters." }
    ],
    faq: [
      { q: "When did Micho open?", a: "Micho opened at 200 Crookes, Sheffield S10 1TG in November 2025." },
      { q: "Why does Micho use charcoal instead of gas?", a: "Because the food is different. Charcoal produces a smoke loop when fat combusts on the coals and rises back through the meat. That is not available on gas. After twenty-five years of cooking, this is not a difficult choice." },
      { q: "Is Micho family-run?", a: "Yes. The family that opened it runs it. The people who make decisions about the food are the people who cook it." },
      { q: "Does Micho make its own desserts?", a: "Yes. Sutlac (Turkish rice pudding, £4.95) and Baklava (£5.95) are both made in-house every service." }
    ],
    related: ['sheffield-crookes-turkish-restaurant', 'what-regulars-know']
  },

  {
    slug: 'meze-not-a-starter',
    title: "Meze Is Not a Starter. Here's What It Actually Is",
    category: 'Turkish Culture',
    date: '3 May 2026',
    dateISO: '2026-05-03',
    readTime: '5 min read',
    excerpt: "There were four of them at the table and they ordered the meze to begin. By the time the grill plates arrived, there was no room. They were confused about how this had happened.",
    hero: U('1529042410759-befb1204b468'),
    heroAlt: 'A spread of Turkish cold meze dishes on a table at Micho',
    brief: [
      "Meze is a Persian word meaning taste or flavour, and it describes a way of eating throughout a meal rather than a first course.",
      "Meze dishes remain on the table for the duration of a Turkish meal and are not cleared when the main grill course arrives.",
      "The tradition originates on the Aegean coast of Turkey, in cities such as Izmir, Bodrum and Cesme, where meals are long and social.",
      "Two or three meze dishes suits two people eating from the grill; four or five dishes with bread makes meze a complete meal on its own."
    ],
    content: [
      { type: 'h2', text: "The misunderstanding is understandable" },
      { type: 'p', text: "There were four of them at the table and they ordered the meze to begin. This seemed reasonable. The meze was listed at the top of the menu. They ordered four dishes: the Cacik, the Hummus, the Patlican Tarator, and the barbecued peppers with feta. The bread came. They ate through everything. By the time they had finished, the grill plates were on their way out from the kitchen. The table was already full, in every sense. There was no room. They were confused about how this had happened." },
      { type: 'p', text: "In British restaurant culture, things that come before the main course are starters. Starters are small. Starters are over before the main event begins. Meze does not work this way. The word comes from Persian, meaning taste or flavour. It describes a way of eating, not a course. The dishes stay on the table. You eat from them throughout the meal. The table of four ate their meze as a starter and ran out of space because they had solved the wrong problem." },
      { type: 'h2', text: "Where meze culture comes from" },
      { type: 'p', text: "The tradition has its roots in the Aegean coast of Turkey: Izmir, Bodrum, Cesme. The cities facing west toward the Greek islands, where sea trade brought Persian, Greek, and Ottoman influences into the same kitchen over centuries. The Aegean meze table is long, slow, and social. You eat a little, you talk, you return to the dishes, you order more, time passes. This is a different relationship with a meal than three courses and a bill. The dishes are not preambles. They are participants." },
      { type: 'h2', text: "What is on our meze menu" },
      { type: 'p', text: "At Micho we have seven cold meze dishes. Cacik: yogurt with cucumber and dill. Patlican Tarator: barbecued aubergine purée with yogurt and garlic. Saksuka: aubergine, potato and pepper in a tomato sauce, vegan and gluten-free. Coban Salatasi: spiced tomatoes with onion, peppers, cucumber and parsley in pomegranate juice. Hummus. Mixed olives. Biber Kozleme: barbecued pepper with feta and garlic. Prices run from £3.90 to £5.95." },
      { type: 'blockquote', text: "Meze is not what you eat before the meal. It is how the meal begins, continues, and occasionally ends. The dishes stay on the table. That is the whole point." },
      { type: 'h2', text: "The rule that solves the problem" },
      { type: 'p', text: "If you are two people ordering from the grill, two or three meze dishes is the right number. You graze from them through the meal. You return to the Patlican Tarator when the skewers arrive because the cool aubergine and the hot charcoal meat work together. If meze is the meal, four or five dishes for two people with bread is a complete dinner. If you want to order the meze well, ask us. Micho, the chef, has been doing this for twenty-five years." }
    ],
    faq: [
      { q: "What is meze?", a: "Meze is a selection of small dishes that stay on the table throughout a Turkish meal. The word comes from Persian and means taste or flavour, not first course. The dishes are not cleared when the main grill plates arrive." },
      { q: "What meze dishes does Micho serve?", a: "Seven cold dishes: Cacik, Patlican Tarator, Saksuka (vegan/GF), Coban Salatasi, Hummus, mixed olives, and Biber Kozleme. Prices from £3.90 to £5.95." },
      { q: "How many meze dishes should I order?", a: "Two or three for two people alongside grill dishes. Four or five if meze is the main event. If you are not sure, ask your server." },
      { q: "Are any meze dishes vegan?", a: "Yes. Saksuka (aubergine, potato and pepper in tomato sauce) is vegan and gluten-free. Mixed olives are also vegan." }
    ],
    related: ['what-regulars-know', 'sutlac-baklava-turkish-desserts']
  },

  {
    slug: 'halal-meat-what-it-means',
    title: "Why All Meat at Micho Is Halal, and What That Actually Means",
    category: 'Our Story',
    date: '29 Apr 2026',
    dateISO: '2026-04-29',
    readTime: '4 min read',
    excerpt: "A family drove from Burngreave to Crookes on a Thursday evening. They could have eaten closer to home. They came because someone had told them the certification was real, not just a sign fixed to a door.",
    hero: U('1414235077428-338989a2e8c0'),
    heroAlt: 'Fresh halal meat prepared in the kitchen at Micho Turkish Bar and Grill',
    brief: [
      "Halal certification covers the full supply chain from animal to plate, including handling, storage, transport and what the animal was fed.",
      "Cross-contamination with non-halal meat on shared surfaces or equipment is grounds for a kitchen losing its halal certification.",
      "Micho has operated as a fully halal kitchen since opening in November 2025, with certified suppliers and separate handling throughout.",
      "The halal standard applied to Micho's suppliers includes animal welfare and traceability requirements that often exceed the UK food safety baseline."
    ],
    content: [
      { type: 'h2', text: "The drive from Burngreave" },
      { type: 'p', text: "A family drove from Burngreave to Crookes on a Thursday evening last autumn. It takes about twenty minutes in traffic, past Hillsborough, up through Walkley, along to the S10 end of Sheffield that most people in Burngreave rarely have cause to visit. They could have eaten closer to home. There are restaurants in Burngreave and Sharrow and Attercliffe that carry halal signs. They had eaten in some of them. They drove to Micho because someone they trusted had told them the certification was real, not just a sign fixed to a door. That distinction matters more than it sounds." },
      { type: 'h2', text: "What the sign on the door actually means" },
      { type: 'p', text: "A halal sign tells you something. It does not tell you everything. The word halal covers the method of slaughter, but the certification that serious restaurants carry covers a great deal more than that. It covers the supply chain from the animal to the plate: how the meat is handled, processed, stored and transported, what the animal was fed, whether equipment that processes non-halal meat was used on the same line." },
      { type: 'p', text: "Cross-contamination is the issue that most people do not think to ask about. A kitchen that handles both halal and non-halal meat on the same surfaces, with the same knives, loses the certification the moment that happens. This is not a loophole in the rules. It is the point of the rules." },
      { type: 'h2', text: "How we have run since we opened" },
      { type: 'p', text: "We have been fully halal since we opened in Crookes in November 2025. That means certified suppliers and separate handling throughout the kitchen. The kitchen operates one standard. No halal section and non-halal section, no service-by-service management of separation. One standard, from the beginning." },
      { type: 'blockquote', text: "We did not choose to run a fully halal kitchen in order to attract those diners. We run a fully halal kitchen because that is how the restaurant was built and that is how it has operated." },
      { type: 'h2', text: "What the standard covers beyond faith" },
      { type: 'p', text: "The halal standard as it applies to our suppliers covers animal welfare, traceability and handling in ways that often exceed the UK food safety baseline. The animals are raised and processed according to requirements that track them from source. That traceability matters to any diner, regardless of faith. The grill gets the credit in most conversations about what makes the food here what it is. The supply chain is the part that makes that grill worth trusting." }
    ],
    faq: [
      { q: "Is all the meat at Micho halal?", a: "Yes. Every piece of meat on the menu is halal certified. The kitchen has operated this way since the restaurant opened." },
      { q: "What does halal certification actually cover?", a: "The full supply chain: how the animal was raised, handled, slaughtered, processed, stored and transported. Not just the method of slaughter. Cross-contamination with non-halal products is grounds for losing certification." },
      { q: "Does Micho serve alcohol?", a: "Yes. Micho serves a full selection of alcoholic drinks alongside Turkish tea, soft drinks and non-alcoholic options." },
      { q: "Are there vegetarian options at Micho?", a: "Yes. Several meze dishes are vegetarian or vegan, and the Sebzeli pide (mixed vegetables, £12.90) is vegetarian. Vegetarian and vegan items are marked on the menu." }
    ],
    related: ['25-years-behind-the-grill', 'what-regulars-know']
  },

  {
    slug: 'gas-vs-charcoal-grill',
    title: "Gas vs Charcoal: Why the Grill Matters More Than the Marinade",
    category: 'From the Kitchen',
    date: '26 Apr 2026',
    dateISO: '2026-04-26',
    readTime: '5 min read',
    excerpt: "A man from Nether Edge spent a weekend trying to recreate the chicken shish he had eaten at Micho. He had the marinade right. It was not the same.",
    hero: U('1544025162-d76694265947'),
    heroAlt: 'Charcoal grill with kebabs over hot coals and rising smoke',
    brief: [
      "Gas grills direct heat upward only, while charcoal produces both heat and smoke simultaneously throughout the cooking process.",
      "When fat from cooking meat drips onto charcoal it combusts, and the resulting smoke rises back up through the meat as it cooks.",
      "A charcoal grill can exceed 700 degrees Celsius at peak temperature; a domestic gas barbecue typically reaches around 260 degrees.",
      "Marinades influence surface flavour and texture, but the charcoal grill is responsible for the smoke absorption that defines the finished dish."
    ],
    content: [
      { type: 'h2', text: "He had the marinade right" },
      { type: 'p', text: "A man from Nether Edge spent a weekend in March trying to recreate a dish he had eaten at Micho. He had ordered the chicken shish on a Friday evening, eaten it slowly, and decided on the way home that he was going to work out what made it taste the way it did. He researched the marinade. He found a recipe that looked credible, adjusted the ratios, and left chicken thighs in the mix overnight. On the Saturday he lit his gas barbecue, waited for it to reach temperature, and cooked the skewers the way the recipe said to. It was not the same. Not close to the same. He could not understand why." },
      { type: 'h2', text: "The question he was actually asking" },
      { type: 'p', text: "He thought he was asking: what is in the marinade? He was actually asking a different question: what is the grill doing? The marinade seasons the meat at depth, tenderises the protein, and creates the surface that takes on colour in the heat. A good marinade matters. But the marinade receives credit for things the grill is responsible for, because the grill is the part of the process that most people at home cannot replicate. A domestic gas barbecue produces heat that travels in one direction, upward, at temperatures that peak around 260 degrees Celsius. That heat cooks the meat. It does not do what charcoal does." },
      { type: 'h2', text: "What charcoal actually does" },
      { type: 'p', text: "When fat drips from meat onto charcoal, it does not simply disappear. It combusts. The combustion produces smoke, and that smoke rises back up through the meat that caused it. The flavour compounds in that smoke absorb into the surface and the interior of the meat simultaneously with the cooking process. You cannot add this after the fact. You cannot replicate it with a gas burner and a wood chip tray. Charcoal reaches temperatures above 700 degrees Celsius. Domestic gas does not come close." },
      { type: 'blockquote', text: "The marinade is what you taste first. The charcoal is what you are still thinking about an hour later." },
      { type: 'h2', text: "The decision we make every service" },
      { type: 'p', text: "We use charcoal every service. Charcoal costs more to run than gas. It takes longer to bring to temperature before service begins. It requires active management throughout the evening: reading the heat, adjusting the coals, understanding how the temperature shifts as service progresses. There is no thermostat. There is no dial. Micho has run kitchens on charcoal for more than twenty-five years and has never found a reason to change." },
      { type: 'h2', text: "What the man from Nether Edge missed" },
      { type: 'p', text: "He came back to Micho three weeks later and ordered the chicken shish again. He told us what had happened with the Saturday experiment, then ordered a second plate. The marinade he had made at home was probably fine. The problem was that he had assumed the grill was a vessel, a means of applying heat to something that had already been made. The grill at Micho is not a vessel. It is half the recipe." }
    ],
    faq: [
      { q: "Why does Micho use charcoal instead of gas?", a: "Because the food is different. Charcoal creates a smoke loop: fat drips onto coals, combusts, and the smoke rises back through the meat. Gas grills do not produce this. The decision was made when the restaurant opened and has not changed." },
      { q: "Can I replicate Micho's charcoal flavour at home?", a: "Not with a gas grill. A charcoal barbecue will get closer, but domestic charcoal does not reach the temperatures of a commercial grill running through a full service. The smoke loop requires both the right fuel and the right heat." },
      { q: "What temperature does the Micho charcoal grill reach?", a: "Charcoal at peak can exceed 700 degrees Celsius. A domestic gas grill reaches around 260 degrees. The higher temperature is what produces the crust quickly while the centre stays moist." },
      { q: "Does the grill run every service?", a: "Yes. The charcoal grill runs every service without exception. It is lit before the doors open. The smoke is already in the room when the first customers arrive." }
    ],
    related: ['what-makes-real-adana-kebab', 'what-regulars-know']
  },

  {
    slug: 'saturday-in-crookes',
    title: "A Saturday in Crookes: The Sheffield Neighbourhood That Rewards the People Who Look Twice",
    category: 'Sheffield',
    date: '19 Apr 2026',
    dateISO: '2026-04-19',
    readTime: '4 min read',
    excerpt: "She drove from Hillsborough on a Saturday in October because a colleague had mentioned Micho twice in three weeks. She had not been to Crookes before.",
    hero: U('1555396273-367ea4eb4db5'),
    heroAlt: 'Crookes Road, Sheffield on a Saturday afternoon',
    brief: [
      "Crookes is a residential area running north-west from the Broomhill junction, about fifteen minutes end-to-end on foot, with no restaurant district.",
      "Micho opens at 12pm on Saturdays and the dining room fills by 1pm; arriving at noon gives you the quieter table and unhurried service.",
      "The Fox and Duck on Whitham Road and The Lescar on Sharrow Vale Road are both within fifteen to twenty minutes' walk for after lunch.",
      "Walking back through Broomhill via Glossop Road takes around thirty minutes and connects to the number 51 bus toward Sheffield city centre."
    ],
    content: [
      { type: 'h2', text: "She came because of the second mention" },
      { type: 'p', text: "She worked with someone who had been to Micho twice in the span of three weeks, which she thought was unusual. Her colleague explained that the first visit had been with her husband and the second had been because she could not stop thinking about it. The meal, she said, was the best she had eaten that year in Sheffield, which was a specific claim to make. Several of the restaurants that Sheffield people name first had already been tried and filed away as good but not remarkable. She drove from Hillsborough on a Saturday in October with no particular knowledge of Crookes and no idea what else was along the road." },
      { type: 'h2', text: "What Crookes actually is" },
      { type: 'p', text: "Crookes runs north-west from the Broomhill junction, up a long road that you can walk end to end in about fifteen minutes. It is not a destination neighbourhood the way that Kelham Island has become. It does not announce itself. The shops are independent. There is a butcher. There is a deli. There are coffee shops on Crookes Road that are not chains. The neighbourhood exists for the people who live in it, and that is most of what you need to know about its character." },
      { type: 'p', text: "Micho opened at 200 Crookes in November 2025, in a neighbourhood that already understood how to support its independents. The shops around it are independent. The coffee shops are not chains. Crookes exists for the people who live in it, and that is the kind of neighbourhood that notices when a new kitchen does things properly." },
      { type: 'h2', text: "What a Saturday looks like" },
      { type: 'p', text: "We open at twelve on Saturdays. The early tables are quieter. By one o'clock the room has filled, and the wait for a table without a reservation starts to stretch. If you want to come on a Saturday and take your time, arrive at twelve. The grill is running, the meze is being prepared fresh, and the room has not yet reached the noise level of a full Saturday afternoon service." },
      { type: 'p', text: "After lunch, Crookes Road repays a walk. The Fox and Duck on Whitham Road is fifteen minutes from us and worth it. The Lescar on Sharrow Vale Road is further, closer to twenty minutes, but Sharrow Vale Road itself is worth the time. If you walk back through Broomhill via Glossop Road, the full circuit takes about thirty minutes and ends you near the Broomhill junction with the number 51 bus back toward the city centre." },
      { type: 'blockquote', text: "Crookes is the kind of place that people who grew up in Sheffield know about, and people who moved to Sheffield discover later, usually because someone told them twice." },
      { type: 'h2', text: "She came back" },
      { type: 'p', text: "On the first visit, she ordered the mixed grill and one meze plate. The Sutlac came on a server's recommendation and went without the spoon being put down. In December she came back with three other people, each of whom she had told about Micho twice before they agreed to the trip. A neighbourhood she had not known before October had become one of her reasons to stay in Sheffield. That is what Crookes does to people who look twice." }
    ],
    faq: [
      { q: "What time does Micho open on Saturdays?", a: "12pm. Tables fill from around 1pm, so arrive at noon if you want a quieter start." },
      { q: "What bus goes to Crookes from Sheffield city centre?", a: "The number 51 runs from the city centre to Crookes and takes around 20 minutes. Street parking is available in the surrounding roads." },
      { q: "What else is worth doing in Crookes?", a: "The Fox and Duck on Whitham Road (15 mins walk) and The Lescar on Sharrow Vale Road (20 mins) are both worth knowing. Independent coffee shops on Crookes Road are good for a morning before lunch." },
      { q: "Is Crookes worth a trip from elsewhere in Sheffield?", a: "Yes. The short answer is that Micho alone justifies the trip. The longer answer is that Crookes plus lunch plus a walk back through Broomhill is a solid Sheffield Saturday." }
    ],
    related: ['sheffield-crookes-turkish-restaurant', 'what-regulars-know']
  },

  {
    slug: 'sutlac-baklava-turkish-desserts',
    title: "Sutlac, Baklava, and the Chef's Selection: How a Turkish Meal Actually Ends",
    category: 'From the Kitchen',
    date: '15 Apr 2026',
    dateISO: '2026-04-15',
    readTime: '5 min read',
    excerpt: "At the end of a grill course, most tables wave the dessert menu away. On a Wednesday in November, one table did not. When the Sutlac arrived, the person nearest the door looked at it and looked surprised.",
    hero: U('1529042410759-befb1204b468'),
    heroAlt: 'Homemade Sutlac Turkish rice pudding and baklava at Micho',
    brief: [
      "Turkish desserts are lighter than a British pudding course and function more like an Italian espresso and biscuit at the end of a meal.",
      "Sutlac is a Turkish rice pudding made by cooking rice in whole milk until the grains dissolve; it is denser and less sweet than its British equivalent.",
      "Good baklava is crisp: the filo layers shatter under a fork, and the syrup soaks the interior without softening the exterior.",
      "Turkish tea is always available at Micho, served black in a small glass; the bitterness cuts through the sweetness of the baklava."
    ],
    content: [
      { type: 'h2', text: "The table that did not wave it away" },
      { type: 'p', text: "At the end of a grill course, most tables wave the dessert menu away. We see it every service. Someone pushes their plate back a few centimetres. Someone else says they could not eat another thing. The menus go back to the server unread, and the table asks for the bill. On a Wednesday evening in November, one table did not wave the menu away. They ordered the Sutlac. There were four of them, and they had been to Micho before, which was probably why they ordered it. When the Sutlac arrived, the person nearest the door looked at it for a moment and then looked surprised." },
      { type: 'h2', text: "Why the refusal is usually wrong" },
      { type: 'p', text: "The mistake most people make is measuring a Turkish dessert against a British one. The British sweet course is heavy: sponge, cream, custard, the kind of thing that compounds the weight of everything that came before it. If that is your frame of reference, you are right to decline after a full grill course. Turkish desserts are not built on that logic. They sit closer to what Italians do with coffee and a small biscuit at the end of a meal: something that punctuates, that finishes the palate, that does not add to the load but changes it." },
      { type: 'h2', text: "What Sutlac is" },
      { type: 'p', text: "Our Sutlac is homemade and costs £4.95. Rice is cooked slowly in whole milk until the individual grains dissolve into a single smooth texture. Sugar is added, along with vanilla or rose water depending on the preparation. The result is closer in texture to a panna cotta than to a British rice pudding: denser and colder and less sweet than most people expect. Some versions are finished under a grill to produce a caramelised top, which adds a slight bitterness to the surface. The bitterness is the point. It interrupts the sweetness before it settles." },
      { type: 'blockquote', text: "The person nearest the door looked at it and looked surprised. That is the reaction we see most often from people who order the Sutlac for the first time." },
      { type: 'h2', text: "What baklava is when it is good" },
      { type: 'p', text: "Our Baklava is homemade and costs £5.95. Filo pastry layered with pistachios or walnuts, soaked in a lemon-flavoured sugar syrup. Good baklava is crisp. The filo layers shatter when you press them with a fork. The syrup soaks the interior without softening the exterior, which requires timing and the right syrup concentration. Soggy baklava is the result of too much syrup or syrup added at the wrong temperature. We have made this enough times to know where those errors occur." },
      { type: 'h2', text: "How to end the meal properly" },
      { type: 'p', text: "The Chef's Weekly Selection costs £5.50 and changes with the season. Ask your server before you order it. At the end of these, ask for Turkish tea. It arrives black, in a small glass, with no milk. The bitterness cuts through the sweetness of the baklava the way a good espresso cuts through tiramisu. It is always available. All you have to do is ask." }
    ],
    faq: [
      { q: "What desserts does Micho serve?", a: "Homemade Sutlac (Turkish rice pudding, £4.95 vegetarian), homemade Baklava (£5.95), and the Chef's Weekly Selection (£5.50) which changes with the season. Ask your server what it is before you order." },
      { q: "What is Sutlac?", a: "A Turkish rice pudding made by cooking rice in whole milk until the grains dissolve into a smooth, creamy texture. Less sweet than a British rice pudding. Sometimes finished under a grill for a caramelised top." },
      { q: "Is the baklava at Micho homemade?", a: "Yes. Filo pastry layered with ground pistachios, soaked in a lemon sugar syrup. Good baklava is crisp, not soggy. We make it in-house." },
      { q: "Does Micho serve Turkish tea?", a: "Yes. Turkish tea (Cay) is always available. Black, served in a small glass, no milk. The bitterness cuts through the sweetness of the baklava. Just ask for it at the end of the meal." }
    ],
    related: ['meze-not-a-starter', 'what-makes-real-adana-kebab']
  },

  {
    slug: 'what-regulars-know',
    title: "What Sheffield Regulars Know About Micho That Visitors Never Find Out",
    category: 'Sheffield',
    date: '10 Apr 2026',
    dateISO: '2026-04-10',
    readTime: '5 min read',
    excerpt: "He came on a recommendation from a friend who lived in Broomhill. The first visit was good. He did not go back for six weeks. The second visit was better.",
    hero: U('1551218808-94e220e084d2'),
    heroAlt: 'Interior of Micho Turkish Bar and Grill set for evening service',
    brief: [
      "First-time visitors find the food good; returning visitors find it better, because knowing how to pace the meal and what to order makes a significant difference.",
      "Regular customers prefer Wednesday and Thursday evenings, when the dining room is quieter and there is more time to ask the server questions.",
      "The mixed grill for two costs £60 and contains more food than most first-time diners expect, often leaving no room for the dessert course.",
      "When asked what brings them back, returning customers consistently name one thing: the food is the same on every visit, regardless of the day or how busy the room is."
    ],
    content: [
      { type: 'h2', text: "The first visit" },
      { type: 'p', text: "He came on a recommendation from a friend who lived in Broomhill. The friend had been clear: order the mixed grill, go on a weeknight, do not leave without dessert. He came on a Tuesday in February, booked a table for two, and followed two of the three pieces of advice. He and his partner ordered the mixed grill for two. They ate it slowly, in the way that you eat something that is better than you expected. They left satisfied, and slightly too full, without ordering dessert because they had misjudged how much food the mixed grill represented. On the drive back to Walkley he told his partner it was one of the best meals he had eaten in Sheffield." },
      { type: 'h2', text: "What changed on the second visit" },
      { type: 'p', text: "They came back on a Thursday in March. This time he knew which meze to order before he sat down, how to pace the meal, and to ask the server about the Chef's Weekly Selection. He followed all three pieces of advice his friend had given. The difference between the first visit and the second was not the food. The food at Micho on a Tuesday in February is the same food as on a Thursday in March. The difference was him." },
      { type: 'blockquote', text: "The first visit tells you what Micho is. The second visit tells you how to be there." },
      { type: 'h2', text: "What regulars know about when to come" },
      { type: 'p', text: "Friday and Saturday evenings fill. People who have been coming for years do not come on Friday and Saturday evenings unless they have booked ahead. Wednesday and Thursday evenings are different. The room is quieter, the service has more room to breathe, and the people sitting around you are more likely to be regulars than visitors. Sunday lunch runs from twelve until nine. Families come on Sundays. People who have been coming for fifteen years come on Sundays. If you are coming with children or with people who want more space and less noise, Sunday is the answer." },
      { type: 'h2', text: "What the mixed grill for two actually contains" },
      { type: 'p', text: "The mixed grill for two costs £60. It includes Adana, chicken shish, lamb shish, lamb chops, and chicken wings. It comes with two meze, salad and bulgur wheat. It is more food than most first-time visitors expect, which is why the dessert gets declined at the end of it. The best meze pairing with the mixed grill is Patlican Tarator alongside Coban Salatasi. The aubergine handles the richness of the charcoal meat. The pomegranate sharpness resets the palate between courses." },
      { type: 'h2', text: "The thing regulars name most" },
      { type: 'p', text: "It is not a specific dish. When you ask customers who come back what brings them in again, the answer is the same word: consistency. The lamb chops on a Tuesday taste the same as the lamb chops on a Saturday. The grill does not change because it is a quiet night. The meze does not change because the room is full. Consistency is the thing that is hardest to maintain and the thing that matters most. That is what regulars know. The first visit does not tell you that. The second one does." }
    ],
    faq: [
      { q: "When is the best time to visit Micho?", a: "Wednesday or Thursday evenings for a quieter experience with more time to ask questions. Friday and Saturday evenings are busy: book ahead. Sunday lunch from 12pm is the family option." },
      { q: "What should I order on my first visit?", a: "Two or three cold meze dishes (Patlican Tarator and Coban Salatasi work with everything), then the mixed grill for two at £60 if there are two of you. Leave room for Sutlac or Baklava. Ask for Turkish tea at the end." },
      { q: "Does Micho have a kids menu?", a: "Yes. Sunday lunch is particularly family-friendly. The Kasarli pide (cheese flatbread) is £7.50 on the kids' menu." },
      { q: "Does Micho serve alcohol?", a: "Yes. A full selection of alcoholic drinks is available. Turkish tea, soft drinks and non-alcoholic options are also available. Turkish tea at the end of the meal is always worth asking for." }
    ],
    related: ['sheffield-crookes-turkish-restaurant', 'saturday-in-crookes']
  }
]

export const categories = ['All', 'Our Story', 'From the Kitchen', 'Sheffield', 'Turkish Culture']

export function getPost(slug) {
  return posts.find(p => p.slug === slug) || null
}

export function getRelatedPosts(slugs) {
  return slugs.map(s => posts.find(p => p.slug === s)).filter(Boolean)
}
