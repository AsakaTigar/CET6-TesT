const EXAMS =[
  {
   "id": 1,
   "name": "第一套",
   "theme": "自主学习 · 传统婚礼",
   "meta": {
    "title": "大学英语六级模拟考试（第一套）",
    "subtitle": "CET-6 Simulated Test · Paper 1",
    "totalTime": 7800,
    "fullScore": 710
   },
   "writing": {
    "time": 1800,
    "score": 106.5,
    "directions": "For this part, you are allowed 30 minutes to write an essay that begins with the sentence “Nowadays, cultivating independent learning ability is becoming increasingly crucial for personal development.” You can make comments, cite examples or use your personal experiences to develop your essay. You should write at least 150 words but no more than 200 words.",
    "minWords": 150,
    "maxWords": 200,
    "model": "Nowadays, cultivating independent learning ability is becoming increasingly crucial for personal development. In an era where knowledge updates at an unprecedented pace, the capacity to learn on one's own has evolved from a desirable trait into an indispensable competence.\n\nThe reasons behind this trend are not hard to identify. First, formal schooling can never equip us with everything we need for a lifetime; much of what we will use in our careers has to be acquired by ourselves long after graduation. Second, those who can teach themselves are far more adaptable when confronted with new challenges, since they do not passively wait to be instructed but actively seek solutions.\n\nTake my own experience as an example. When I taught myself programming through online courses, I not only mastered a practical skill but also gained the confidence to tackle unfamiliar fields. Therefore, I firmly believe that developing independent learning ability is a wise investment that will benefit us throughout our lives.",
    "rubric": [
     "切题：紧扣“独立学习能力”，并以给定句开头（必须照抄首句）",
     "结构：观点段 + 原因/举例段 + 结论段，三段式清晰",
     "论证：至少两个理由 + 一个具体例子",
     "语言：使用 cultivate / indispensable / adaptable 等高级表达",
     "字数：150–200 词，标点规范",
     "连接词：First/Second/Therefore 衔接自然"
    ]
   },
   "listening": {
    "time": 1500,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 长对话",
     "directions": "You will hear two long conversations. Click ▶ to play, then choose the best answer.",
     "conversations": [
      {
       "id": "p1c1",
       "script": "W: Hi Mark, I heard you just came back from a trip to Iceland. How was it?\nM: Oh, it was absolutely incredible, Sarah. I'd say it's the most stunning place I've ever visited.\nW: That sounds amazing. What did you enjoy the most? The volcanoes or the glaciers?\nM: Honestly, the highlight for me was seeing the Northern Lights. We waited three nights in the freezing cold, and on the last night the whole sky lit up with green and purple. It was magical.\nW: Three nights of waiting? Wasn't it terribly cold?\nM: It was, around minus ten degrees. But the tour company provided thermal suits and hot drinks, so it was manageable. I'd strongly recommend a guided tour rather than going on your own.\nW: Why is that? I was thinking of driving around the island myself next summer.\nM: The weather changes so fast that local guides know exactly where and when the lights will appear. Plus some roads are dangerous for inexperienced drivers.\nW: That makes sense. Maybe I'll reconsider my plan. Did it cost a fortune?\nM: The tour wasn't cheap, but considering everything was arranged for us, it was worth every penny.",
       "questions": [
        {
         "q": "What does the man think of his trip to Iceland?",
         "options": [
          "It was too expensive to be worthwhile.",
          "It was the most stunning trip he has ever had.",
          "It was ruined by the bad weather.",
          "It was disappointing because of the cold."
         ],
         "answer": 1
        },
        {
         "q": "What was the highlight of the man's trip?",
         "options": [
          "Climbing the volcanoes.",
          "Seeing the Northern Lights.",
          "Driving around the island.",
          "Walking on the glaciers."
         ],
         "answer": 1
        },
        {
         "q": "Why does the man recommend a guided tour?",
         "options": [
          "It is much cheaper than self-driving.",
          "Tourists can avoid waiting in the cold.",
          "Guides know where and when the lights appear.",
          "The thermal suits are free."
         ],
         "answer": 2
        },
        {
         "q": "What is the woman planning to do next summer?",
         "options": [
          "Drive around the island herself.",
          "Visit the volcanoes.",
          "Give up the trip because of the cost.",
          "Book the same tour as the man."
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "p1c2",
       "script": "M: Good morning, Professor Lee. Thank you for seeing me. I wanted to talk about my research proposal.\nW: Of course, James. I've read your draft. It's ambitious, but I have concerns about its scope.\nM: Yes, I was worried too. Do you think I'm trying to cover too much?\nW: Frankly, yes. You're attempting to analyse solar, wind, and hydroelectric power all at once. For a semester project, that's unrealistic. I'd suggest narrowing it down to one area.\nM: That's helpful. I think I'm most interested in solar power, especially its application in rural areas.\nW: An excellent choice. Rural solar applications are a hot topic with plenty of recent data. But you'll need solid statistics, not just general claims.\nM: Understood. Where should I look for reliable data?\nW: Start with the university library's online database. The International Energy Agency also publishes very credible annual reports. Avoid random websites.\nM: Thank you. Should I submit a revised outline before writing?\nW: Yes, please. Send it to me by next Friday and we'll discuss it during my office hours.",
       "questions": [
        {
         "q": "What is the man's research proposal about?",
         "options": [
          "Climate change.",
          "Renewable energy.",
          "Rural education.",
          "The history of energy policy."
         ],
         "answer": 1
        },
        {
         "q": "What is the professor's main concern?",
         "options": [
          "Its topic is outdated.",
          "It lacks an introduction.",
          "Its scope is too broad.",
          "It is too short."
         ],
         "answer": 2
        },
        {
         "q": "What focus does the man finally decide on?",
         "options": [
          "Hydroelectric power.",
          "A comparison of all three.",
          "Wind power in cities.",
          "Solar power in rural areas."
         ],
         "answer": 3
        },
        {
         "q": "What does the professor advise before writing?",
         "options": [
          "Apply for funding.",
          "Submit a revised outline by next Friday.",
          "Interview local residents.",
          "Read random websites."
         ],
         "answer": 1
        }
       ]
      }
     ]
    },
    "sectionB": {
     "title": "Section B —— 短文/讲座",
     "directions": "You will hear a passage followed by questions. Click ▶ to play, then choose the best answer.",
     "passages": [
      {
       "id": "p1b1",
       "script": "Today I'd like to talk about procrastination, the habit of putting off tasks until the last minute.\nMany of us assume procrastination is simply poor time management or laziness. However, recent psychological research suggests the real cause is often emotional rather than practical. When we face a task that makes us anxious or bored, our brain seeks immediate relief by switching to something more pleasant, such as checking social media.\nThis explains why procrastination gets worse when a task feels overwhelming. The temporary relief reinforces the behaviour, creating a vicious cycle that is hard to break.\nSo what can we do? The first strategy is to break large tasks into smaller, manageable steps. A huge assignment feels far less threatening when divided into tiny actions you can finish in minutes.\nThe second strategy is to be kind to yourself. Surprisingly, studies show that students who forgave themselves for procrastinating were less likely to procrastinate on future tasks. Self-criticism only increases the negative emotions that cause the problem.\nFinally, remove distractions from your environment. If your phone is the main temptation, put it in another room while you work.",
       "questions": [
        {
         "q": "What do many people mistakenly believe about procrastination?",
         "options": [
          "It only affects students.",
          "It is mainly caused by emotional factors.",
          "It is impossible to overcome.",
          "It is simply a matter of poor time management."
         ],
         "answer": 3
        },
        {
         "q": "According to recent research, what is the real cause?",
         "options": [
          "Emotional discomfort with the task.",
          "Too much free time.",
          "A lack of intelligence.",
          "Physical tiredness."
         ],
         "answer": 0
        },
        {
         "q": "What is the first strategy suggested?",
         "options": [
          "Setting strict deadlines.",
          "Punishing yourself for delays.",
          "Working only when inspired.",
          "Breaking large tasks into smaller steps."
         ],
         "answer": 3
        },
        {
         "q": "What surprising finding is mentioned about self-forgiveness?",
         "options": [
          "It reduces future procrastination.",
          "It has no effect.",
          "It makes people lazier.",
          "It increases negative emotions."
         ],
         "answer": 0
        }
       ]
      }
     ]
    }
   },
   "reading": {
    "time": 2400,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 选词填空（Word Bank）",
     "directions": "Select one word for each blank from the word bank. Each choice is identified by a letter. You may not use any word more than once.",
     "passage": "The benefits of reading to young children are well documented. Yet a surprising number of parents 26 to read aloud to their kids, often because they feel they are too 27 with work. Researchers, however, argue that even ten minutes a day can produce 28 results. Children who are read to 29 develop larger vocabularies and stronger comprehension skills than those who are not.\n\nReading aloud does more than build language. It also 30 a special bond between parent and child, creating a sense of security and warmth. Moreover, stories expose children to ideas and places far 31 their immediate surroundings, gradually 32 their curiosity about the wider world.\n\nExperts 33 that parents should not stop reading aloud once a child learns to read independently. Instead, they should continue, gradually choosing more 34 texts. In this way, reading remains a shared pleasure rather than a 35 chore, and the lifelong habit of reading is firmly established.",
     "bank": [
      {
       "l": "A",
       "w": "beyond"
      },
      {
       "l": "B",
       "w": "consistently"
      },
      {
       "l": "C",
       "w": "tedious"
      },
      {
       "l": "D",
       "w": "busy"
      },
      {
       "l": "E",
       "w": "fail"
      },
      {
       "l": "F",
       "w": "remarkable"
      },
      {
       "l": "G",
       "w": "destroys"
      },
      {
       "l": "H",
       "w": "strengthens"
      },
      {
       "l": "I",
       "w": "nearby"
      },
      {
       "l": "J",
       "w": "ignore"
      },
      {
       "l": "K",
       "w": "occasionally"
      },
      {
       "l": "L",
       "w": "challenging"
      },
      {
       "l": "M",
       "w": "reward"
      },
      {
       "l": "N",
       "w": "stimulating"
      },
      {
       "l": "O",
       "w": "insist"
      }
     ],
     "blanks": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35
     ],
     "answers": {
      "26": "E",
      "27": "D",
      "28": "F",
      "29": "B",
      "30": "H",
      "31": "A",
      "32": "N",
      "33": "O",
      "34": "L",
      "35": "C"
     }
    },
    "sectionC": {
     "title": "Section C —— 仔细阅读（Reading in Depth）",
     "directions": "There is a passage followed by questions. Choose the best answer.",
     "passages": [
      {
       "id": "p1r1",
       "source": "2024年6月六级真题 真实篇章",
       "text": "Variability is crucially important for learning new skills. Consider learning how to serve in tennis. Should you always practise serving from the exactly same location on the court, aiming at the same spot? Although practising in more variable conditions will be slower at first, it will likely make you a better tennis player in the end. This is because variability leads to better generalisation of what is learned.\n\nThis principle is found in many domains, including speech perception and learning categories. For instance, infants will struggle to learn the category \"dog\" if they are only exposed to Chihuahuas, instead of many different kinds of dogs.\n\n\"There are over ten different names for this basic principle,\" says Limor Raviv, the senior investigator of a recent study. \"Learning from less variable input is often fast, but may fail to generalise to new stimuli.\"\n\nTo identify key patterns, Raviv and her colleagues reviewed over 150 studies on variability and generalisation across fields, including computer science, linguistics, categorisation, visual perception and formal education.\n\nThe researchers discovered that the term variability can refer to at least four different kinds, such as set size and scheduling. \"These four kinds of variability have never been directly compared — which means that we currently don't know which is most effective for learning,\" says Raviv.\n\nBut why does variability impact learning? One theory is that more variable input can highlight which aspects of a task are relevant and which are not. Another theory is that greater variability leads to broader generalisations, because it represents the real world better, including atypical examples. A third reason has to do with the way memory works: when training is variable, learners are forced to actively reconstruct their memories.\n\n\"Understanding the impact of variability is important for literally every aspect of our daily life,\" explains Raviv. \"For example, face recognition is affected by whether people grew up in a small community or a larger one. Exposure to fewer faces during childhood is associated with diminished face memory.\"\n\n\"We hope this work will spark people's curiosity and generate more work on the topic,\" concludes Raviv. \"Can we find similar effects of variability beyond the brain, for instance, in the immune system?\"",
       "questions": [
        {
         "num": 51,
         "q": "What will happen to infants exposed only to Chihuahuas?",
         "options": [
          "They will imagine Chihuahuas in various conditions.",
          "They will prefer Chihuahuas to other dogs.",
          "They will encounter difficulty learning the category “dog”.",
          "They will categorise other objects first."
         ],
         "answer": 2
        },
        {
         "num": 52,
         "q": "What does Raviv say about the four kinds of variability?",
         "options": [
          "Why they were never compared is a mystery.",
          "Why they impact learning is far from understood.",
          "Which is most relevant to the task is to be confirmed.",
          "Which is most conducive to learning is yet to be identified."
         ],
         "answer": 3
        },
        {
         "num": 53,
         "q": "How does one theory explain the importance of variability?",
         "options": [
          "Learners focus on related skills instead of unrelated ones.",
          "Learners regard variable training as typical of the real world.",
          "Learners attend to relevant aspects and ignore irrelevant ones.",
          "Learners are compelled to reorganise their memories."
         ],
         "answer": 3
        },
        {
         "num": 54,
         "q": "What do we learn about face recognition?",
         "options": [
          "People from a small community easily remember familiar faces.",
          "Community size impacts face recognition ability.",
          "Face recognition impacts every aspect of social life.",
          "People from a large community recognise any faces."
         ],
         "answer": 1
        },
        {
         "num": 55,
         "q": "What does Raviv hope to do with the research?",
         "options": [
          "Use variability to teach unrelated skills.",
          "Apply the principle to the immune system.",
          "Arouse interest in variability and stimulate more research.",
          "Highlight which aspects of a task are relevant."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "translation": {
    "time": 1800,
    "score": 106.5,
    "source": "2024年6月六级真题 真实题目",
    "kind": "translation",
    "directions": "Translate the passage from Chinese into English.",
    "text": "中国的传统婚礼习俗历史悠久，从周朝开始就逐渐形成了一套完整的婚礼仪式，有些一直沿用至今。如今的中式婚礼习俗已有很大变化，但婚礼庆典仍然十分隆重。婚礼场地经过精心装饰，以象征喜庆(jubilance)的红色为主色调，摆放着许多祝愿新人幸福的物件。在婚礼上，新人要拜天地(bow to Heaven and Earth)、拜父母和相互对拜，然后设宴招待宾客，并向宾客敬酒致谢。今天，许多年轻人依然钟情于传统的中式婚礼，体验独特而美好的中国式浪漫。",
    "reference": "China's traditional wedding customs have a long history. A complete set of wedding ceremonies gradually took shape as early as the Zhou Dynasty, and some of them are still in use today. Although Chinese wedding customs have changed greatly nowadays, the wedding celebration remains a grand occasion. The wedding venue is elaborately decorated, with red — the colour symbolizing jubilance — as the main tone, and many objects expressing wishes for the happiness of the newly-weds are displayed. At the wedding, the bride and groom bow to Heaven and Earth, bow to their parents, and bow to each other; then they hold a banquet to entertain the guests and propose toasts to thank them. Today, many young people are still fond of traditional Chinese weddings, experiencing the unique and wonderful romance of the Chinese style.",
    "points": [
     "历史悠久 → have a long history",
     "从周朝开始 → as early as the Zhou Dynasty",
     "沿用至今 → still in use today",
     "十分隆重 → a grand occasion",
     "精心装饰 → elaborately decorated",
     "象征喜庆的红色 → red, the colour symbolizing jubilance",
     "新人 → the newly-weds / bride and groom",
     "拜天地 → bow to Heaven and Earth",
     "设宴招待宾客 → hold a banquet to entertain the guests",
     "敬酒致谢 → propose toasts to thank them",
     "钟情于 → be fond of",
     "中国式浪漫 → the romance of the Chinese style"
    ]
   }
  },
  {
   "id": 2,
   "name": "第二套",
   "theme": "人工智能 · 港珠澳大桥",
   "meta": {
    "title": "大学英语六级模拟考试（第二套）",
    "subtitle": "CET-6 Simulated Test · Paper 2",
    "totalTime": 7800,
    "fullScore": 710
   },
   "writing": {
    "time": 1800,
    "score": 106.5,
    "directions": "For this part, you are allowed 30 minutes to write an essay that begins with the sentence “Nowadays, the rapid development of artificial intelligence is profoundly reshaping the way we work and live.” You can make comments, cite examples or use your personal experiences. You should write at least 150 words but no more than 200 words.",
    "minWords": 150,
    "maxWords": 200,
    "model": "Nowadays, the rapid development of artificial intelligence is profoundly reshaping the way we work and live. From voice assistants on our phones to algorithms that recommend what we watch, AI has quietly woven itself into the fabric of everyday life.\n\nThe influence of this technology is twofold. On the one hand, AI dramatically boosts efficiency: it handles repetitive tasks, analyses vast amounts of data in seconds, and frees us to focus on creative work that machines cannot replicate. On the other hand, it raises legitimate concerns, such as job displacement and the misuse of personal data, which society must address with care.\n\nIn my view, the wisest attitude is neither blind enthusiasm nor groundless fear. Just as the calculator did not make mathematicians obsolete, AI will reward those who learn to collaborate with it. Therefore, instead of resisting this trend, we should equip ourselves with new skills and embrace AI as a powerful partner in shaping a better future.",
    "rubric": [
     "切题：围绕“AI 如何重塑工作与生活”，照抄给定首句",
     "结构：观点 + 双面分析（利/弊）+ 个人立场结论",
     "辩证：既谈效率提升，也谈就业/隐私隐忧",
     "语言：boost efficiency / job displacement / collaborate with 等表达",
     "字数：150–200 词",
     "连接：On the one hand / On the other hand / Therefore"
    ]
   },
   "listening": {
    "time": 1500,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 长对话",
     "directions": "You will hear two long conversations. Click ▶ to play, then choose the best answer.",
     "conversations": [
      {
       "id": "p2c1",
       "script": "W: Hey Tom, you look exhausted. Is the new job keeping you busy?\nM: You have no idea, Lisa. I've been working as a data analyst for three weeks now, and the learning curve is steeper than I expected.\nW: I can imagine. Weren't you a marketing major in college? How did you end up in data analysis?\nM: That's the funny part. During my final year, I took an elective course in statistics just to fill my schedule, and I unexpectedly fell in love with it. I taught myself Python over the summer.\nW: That's impressive. So your company hired you despite your marketing background?\nM: Exactly. My manager said they valued my ability to explain data to non-technical people. Apparently many analysts are great with numbers but terrible at communication.\nW: That makes a lot of sense. Technical skills alone aren't enough these days.\nM: Right. My advice to anyone job-hunting is: don't underestimate soft skills. Being able to present your findings clearly can set you apart from candidates with stronger technical resumes.\nW: I'll keep that in mind. I've got an interview next week, so any tips are welcome.",
       "questions": [
        {
         "q": "What is the man's current job?",
         "options": [
          "A Python developer.",
          "A data analyst.",
          "A marketing manager.",
          "A statistics teacher."
         ],
         "answer": 1
        },
        {
         "q": "How did the man become interested in his field?",
         "options": [
          "A friend recommended it.",
          "His manager trained him.",
          "Through an elective statistics course.",
          "He majored in it at college."
         ],
         "answer": 2
        },
        {
         "q": "Why did the company value the man?",
         "options": [
          "He had the strongest technical resume.",
          "He could explain data to non-technical people.",
          "He had years of experience.",
          "He was a statistics major."
         ],
         "answer": 1
        },
        {
         "q": "What advice does the man give to job-hunters?",
         "options": [
          "Focus only on technical skills.",
          "Don't underestimate soft skills.",
          "Avoid changing career fields.",
          "Always take elective courses."
         ],
         "answer": 1
        }
       ]
      },
      {
       "id": "p2c2",
       "script": "M: Welcome back to the show. Today I'm speaking with Dr. Evans, an expert on remote work. Doctor, has working from home really become the new normal?\nW: Thanks for having me. Yes and no. While many companies adopted remote work during the pandemic, what we're seeing now is a shift toward hybrid models, where employees split their time between home and office.\nM: Interesting. So fully remote work isn't winning out?\nW: Not for most industries. Our research shows that while employees love the flexibility, many also miss the spontaneous collaboration that happens in person. Hybrid offers a balance.\nM: What are the biggest challenges companies face with hybrid arrangements?\nW: Coordination, mainly. If half the team is home and half is in the office, meetings can become awkward and uneven. Companies need clear policies about which days people come in.\nM: And what about productivity? Critics argue people slack off at home.\nW: Surprisingly, our data shows productivity often rises at home for focused tasks. The problem isn't laziness; it's isolation and blurred boundaries between work and personal life.\nM: So the future is flexible but structured?\nW: Precisely. The companies that thrive will be those that set clear expectations while trusting their employees.",
       "questions": [
        {
         "q": "What trend does Dr. Evans describe?",
         "options": [
          "A return to fully office-based work.",
          "A shift toward hybrid work models.",
          "The end of remote work.",
          "A rise in unemployment."
         ],
         "answer": 1
        },
        {
         "q": "Why isn't fully remote work winning out?",
         "options": [
          "Many miss in-person collaboration.",
          "Companies banned it.",
          "Employees dislike flexibility.",
          "It lowers salaries."
         ],
         "answer": 0
        },
        {
         "q": "What is the biggest challenge of hybrid work?",
         "options": [
          "Employee laziness.",
          "High office rent.",
          "Lack of computers.",
          "Coordination among team members."
         ],
         "answer": 3
        },
        {
         "q": "What does the data reveal about productivity at home?",
         "options": [
          "It often rises for focused tasks.",
          "It always drops sharply.",
          "It cannot be measured.",
          "It stays exactly the same."
         ],
         "answer": 0
        }
       ]
      }
     ]
    },
    "sectionB": {
     "title": "Section B —— 短文/讲座",
     "directions": "You will hear a passage followed by questions. Click ▶ to play, then choose the best answer.",
     "passages": [
      {
       "id": "p2b1",
       "script": "Have you ever wondered why some cities feel so much more livable than others? Urban planners have spent decades studying this question, and one factor stands out: the presence of green space.\nParks, gardens, and tree-lined streets do far more than beautify a city. Studies consistently show that residents living near green spaces report lower levels of stress, better physical health, and stronger social connections. Even a short walk among trees can measurably reduce blood pressure and improve mood.\nThe benefits extend to the environment as well. Trees absorb carbon dioxide, filter air pollution, and help cool urban areas during heatwaves, a phenomenon known as the urban heat island effect. In some cities, well-placed greenery can lower local temperatures by several degrees.\nHowever, green space is often unevenly distributed. Wealthier neighbourhoods tend to have more parks, while poorer districts may have almost none. Recognising this, many city governments are now investing in community gardens and pocket parks in underserved areas.\nThe lesson is clear: green space is not a luxury but a necessity. As our world becomes increasingly urban, integrating nature into our cities may be one of the smartest investments we can make for both human well-being and environmental health.",
       "questions": [
        {
         "q": "What factor makes cities more livable according to the speaker?",
         "options": [
          "The presence of green space.",
          "Shopping centres.",
          "Wide roads.",
          "Tall buildings."
         ],
         "answer": 0
        },
        {
         "q": "What health benefit of green space is mentioned?",
         "options": [
          "Faster running speed.",
          "Reduced stress and blood pressure.",
          "Better hearing.",
          "Improved eyesight."
         ],
         "answer": 1
        },
        {
         "q": "What environmental benefit is described?",
         "options": [
          "Trees cool urban areas during heatwaves.",
          "Trees increase rainfall.",
          "Trees block all noise.",
          "Trees produce electricity."
         ],
         "answer": 0
        },
        {
         "q": "What problem about green space does the speaker point out?",
         "options": [
          "It causes traffic jams.",
          "It is too expensive to maintain.",
          "It is unevenly distributed across neighbourhoods.",
          "It attracts too many tourists."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "reading": {
    "time": 2400,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 选词填空（Word Bank）",
     "directions": "Select one word for each blank from the word bank. You may not use any word more than once.",
     "passage": "Electric vehicles, once seen as a curiosity, are now rapidly becoming 26 . Sales have surged across the globe as governments offer incentives and consumers grow more 27 about climate change. Yet the transition is not without 28 . The most frequently cited concern is the limited driving range, which makes some drivers 29 to make the switch.\n\nBattery technology, however, is improving at a 30 pace. Engineers have 31 developed batteries that charge faster and last longer, easing many of these worries. Charging stations are also being installed 32 in cities and along highways, making long journeys far more 33 .\n\nCritics argue that producing batteries still 34 significant environmental costs. Supporters respond that, over its lifetime, an electric car remains far cleaner than a 35 petrol vehicle. The debate continues, but the direction of travel seems clear.",
     "bank": [
      {
       "l": "A",
       "w": "steadily"
      },
      {
       "l": "B",
       "w": "rapidly"
      },
      {
       "l": "C",
       "w": "remarkable"
      },
      {
       "l": "D",
       "w": "feasible"
      },
      {
       "l": "E",
       "w": "conventional"
      },
      {
       "l": "F",
       "w": "nearby"
      },
      {
       "l": "G",
       "w": "mainstream"
      },
      {
       "l": "H",
       "w": "reduces"
      },
      {
       "l": "I",
       "w": "concerned"
      },
      {
       "l": "J",
       "w": "eager"
      },
      {
       "l": "K",
       "w": "abandon"
      },
      {
       "l": "L",
       "w": "involves"
      },
      {
       "l": "M",
       "w": "destroys"
      },
      {
       "l": "N",
       "w": "reluctant"
      },
      {
       "l": "O",
       "w": "challenges"
      }
     ],
     "blanks": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35
     ],
     "answers": {
      "26": "G",
      "27": "I",
      "28": "O",
      "29": "N",
      "30": "C",
      "31": "B",
      "32": "A",
      "33": "D",
      "34": "L",
      "35": "E"
     }
    },
    "sectionC": {
     "title": "Section C —— 仔细阅读（Reading in Depth）",
     "directions": "There is a passage followed by questions. Choose the best answer.",
     "passages": [
      {
       "id": "p2r1",
       "source": "CET6 风格 自编篇章",
       "text": "For most of human history, the idea that machines could create art would have seemed absurd. Art was considered the ultimate expression of human creativity, emotion, and experience — qualities that no machine could possess. Yet in recent years, artificial intelligence has begun producing paintings, music, and even poetry that many people find genuinely moving. This development has reignited an age-old question: what exactly is creativity?\n\nDefenders of AI art argue that creativity is fundamentally about generating novel and valuable combinations of existing ideas. By this definition, a system trained on millions of paintings, which then produces an original image, is undeniably creative. The machine is not merely copying; it is synthesising patterns in ways no single human could.\n\nSceptics, however, insist that something essential is missing. They point out that AI has no intentions, no feelings, and no lived experience to draw upon. When a human artist paints grief, the work carries the weight of genuine suffering. An AI, by contrast, simply rearranges pixels according to statistical patterns, with no understanding of what grief means. To call this creativity, critics argue, is to confuse imitation with genuine expression.\n\nThere is also a practical concern. As AI-generated content floods the market, human artists may find it increasingly difficult to earn a living. Some worry that the flood of cheap, machine-made art could devalue human creativity altogether, discouraging the next generation from pursuing artistic careers.\n\nPerhaps the most balanced view is that AI is best understood as a tool rather than a rival. Throughout history, new technologies — from the camera to the synthesiser — have initially threatened established art forms, only to eventually expand them. The camera did not kill painting; it freed painters to explore abstraction. Similarly, AI may not replace human artists but instead become a collaborator, opening creative possibilities we have yet to imagine.",
       "questions": [
        {
         "num": 51,
         "q": "What question has AI art reignited?",
         "options": [
          "What exactly creativity is.",
          "How to sell paintings online.",
          "Why people enjoy music.",
          "Whether machines can replace workers."
         ],
         "answer": 0
        },
        {
         "num": 52,
         "q": "How do defenders of AI art define creativity?",
         "options": [
          "Copying famous paintings precisely.",
          "The ability to feel deep emotions.",
          "Earning money from art.",
          "Generating novel and valuable combinations of ideas."
         ],
         "answer": 3
        },
        {
         "num": 53,
         "q": "Why do sceptics doubt AI creativity?",
         "options": [
          "AI only paints landscapes.",
          "AI works too slowly.",
          "AI cannot use colours.",
          "AI lacks intentions, feelings and lived experience."
         ],
         "answer": 3
        },
        {
         "num": 54,
         "q": "What practical concern is raised about AI art?",
         "options": [
          "It damages computer screens.",
          "It is too expensive to produce.",
          "It may make human artists struggle to earn a living.",
          "It is illegal in some countries."
         ],
         "answer": 2
        },
        {
         "num": 55,
         "q": "What is presented as the most balanced view?",
         "options": [
          "Human art is doomed to disappear.",
          "AI art should be banned.",
          "Cameras destroyed painting.",
          "AI is best understood as a tool and collaborator."
         ],
         "answer": 3
        }
       ]
      }
     ]
    }
   },
   "translation": {
    "time": 1800,
    "score": 106.5,
    "source": "2020年12月六级真题 真实题目",
    "kind": "translation",
    "directions": "Translate the passage from Chinese into English.",
    "text": "港珠澳大桥(Hong Kong-Zhuhai-Macau Bridge)全长55公里，是我国一项不同寻常的工程壮举。大桥将三个城市连接起来，是世界上最长的跨海桥梁和隧道系统。大桥将三个城市之间的旅行时间从3小时缩短到30分钟。这座跨度巨大的钢筋混凝土大桥充分证明中国有能力建造创纪录的巨型建筑。它将助推区域一体化，促进经济增长。大桥是中国发展自己的大湾区总体规划的关键。中国希望将大湾区建成在技术创新和经济繁荣上能与旧金山、纽约和东京的湾区相媲美的地区。",
    "reference": "The Hong Kong-Zhuhai-Macau Bridge, with a total length of 55 kilometres, is an extraordinary engineering feat of China. Connecting the three cities, it is the longest sea-crossing bridge-and-tunnel system in the world. The bridge has shortened the travel time among the three cities from three hours to 30 minutes. This reinforced-concrete bridge with a huge span fully demonstrates that China is capable of building record-breaking gigantic structures. It will boost regional integration and promote economic growth. The bridge is the key to China's master plan for developing its own Greater Bay Area. China hopes to build the Greater Bay Area into a region comparable to the bay areas of San Francisco, New York and Tokyo in terms of technological innovation and economic prosperity.",
    "points": [
     "全长55公里 → with a total length of 55 kilometres",
     "工程壮举 → an engineering feat",
     "跨海桥梁和隧道系统 → sea-crossing bridge-and-tunnel system",
     "从3小时缩短到30分钟 → shortened ... from three hours to 30 minutes",
     "钢筋混凝土 → reinforced-concrete",
     "创纪录的巨型建筑 → record-breaking gigantic structures",
     "助推区域一体化 → boost regional integration",
     "促进经济增长 → promote economic growth",
     "大湾区 → the Greater Bay Area",
     "与...相媲美 → comparable to",
     "技术创新 → technological innovation",
     "经济繁荣 → economic prosperity"
    ]
   }
  },
  {
   "id": 3,
   "name": "第三套",
   "theme": "传统文化 · 梅花",
   "meta": {
    "title": "大学英语六级模拟考试（第三套）",
    "subtitle": "CET-6 Simulated Test · Paper 3",
    "totalTime": 7800,
    "fullScore": 710
   },
   "writing": {
    "time": 1800,
    "score": 106.5,
    "directions": "For this part, you are allowed 30 minutes to write an essay that begins with the sentence “Nowadays, an increasing number of young people are showing a renewed interest in traditional culture.” You can make comments, cite examples or use your personal experiences. You should write at least 150 words but no more than 200 words.",
    "minWords": 150,
    "maxWords": 200,
    "model": "Nowadays, an increasing number of young people are showing a renewed interest in traditional culture. From wearing traditional costumes on the street to attending classical poetry contests, this cultural revival has become a striking phenomenon among the younger generation.\n\nSeveral factors account for this trend. First, as material life becomes abundant, young people are seeking a deeper sense of identity and belonging, which traditional culture readily provides. Second, the rise of social media has made cultural heritage more accessible and appealing, allowing it to be shared in creative, modern forms. A short video of a traditional craft can reach millions overnight.\n\nIn my opinion, this revival is far more than a passing fashion. It reflects a healthy desire to reconnect with our roots while embracing the present. As long as we approach our heritage with genuine understanding rather than mere imitation, traditional culture will continue to flourish and enrich the lives of generations to come.",
    "rubric": [
     "切题：围绕“年轻人重拾传统文化兴趣”，照抄给定首句",
     "结构：观点 + 原因分析 + 个人评价结论",
     "举例：汉服 / 诗词大会 / 短视频等具体现象",
     "语言：cultural revival / sense of identity / heritage 等表达",
     "字数：150–200 词",
     "连接：First / Second / In my opinion"
    ]
   },
   "listening": {
    "time": 1500,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 长对话",
     "directions": "You will hear two long conversations. Click ▶ to play, then choose the best answer.",
     "conversations": [
      {
       "id": "p3c1",
       "script": "W: Excuse me, is this the information desk for the City History Museum?\nM: Yes, it is. How can I help you today?\nW: I'm a university student researching local architecture. I was hoping to see the exhibition on ancient buildings, but I heard it might be closed.\nM: You're in luck. The main exhibition is open, though the east wing is under renovation until next month. The section on traditional wooden structures is actually our most popular display.\nW: That's exactly what I need. Is photography allowed? I'd like to take some pictures for my project.\nM: Photography is permitted in most areas, but flash is prohibited to protect the delicate models. There's also a free guided tour starting at two o'clock if you're interested.\nW: A guided tour would be wonderful. Do I need to book in advance?\nM: For individuals, no booking is required. Just gather near the central hall a few minutes before two. The guide today is one of our senior curators, so you'll get plenty of expert detail.\nW: Perfect. One more thing — is there a student discount on the entrance fee?\nM: Absolutely. With a valid student card, you pay half price. Just show it at the ticket counter over there.",
       "questions": [
        {
         "q": "Why has the woman come to the museum?",
         "options": [
          "To apply for a job.",
          "To research local architecture.",
          "To meet a friend.",
          "To attend a lecture."
         ],
         "answer": 1
        },
        {
         "q": "What does the man say about the east wing?",
         "options": [
          "It is permanently closed.",
          "It is the most popular display.",
          "It is open only to students.",
          "It is under renovation until next month."
         ],
         "answer": 3
        },
        {
         "q": "What rule about photography does the man mention?",
         "options": [
          "Photos cost extra.",
          "Flash is prohibited.",
          "Only curators may take photos.",
          "Photography is completely banned."
         ],
         "answer": 1
        },
        {
         "q": "How can the woman get a discount?",
         "options": [
          "By joining the guided tour.",
          "By booking online.",
          "By coming after two o'clock.",
          "By showing a valid student card."
         ],
         "answer": 3
        }
       ]
      },
      {
       "id": "p3c2",
       "script": "M: Sarah, I noticed you've started bringing your lunch to work every day. Trying to save money?\nW: Partly, but it's more about health, actually. I read a study last month that linked frequent takeout meals to higher stress levels, and it really made me think.\nM: Higher stress? I thought takeout just made you gain weight.\nW: That's what surprised me too. Apparently it's not only the calories. The researchers found that the lack of routine and the unpredictability of restaurant food can subtly increase anxiety over time.\nM: Huh. So cooking your own meals gives you a sense of control?\nW: Exactly. Planning and preparing food turns out to be a calming ritual for many people. Plus, I know exactly what goes into my meals.\nM: I have to admit, your lunches look much fresher than the greasy noodles I order. Maybe I should give it a try.\nW: You should. Start small — just two days a week. That's how I began. Now I genuinely look forward to my lunch break instead of feeling sluggish afterwards.\nM: Alright, you've convinced me. Could you share a few simple recipes?\nW: Of course. I'll send you my favourites tonight. They take fifteen minutes at most.",
       "questions": [
        {
         "q": "Why has the woman started bringing her own lunch?",
         "options": [
          "Mainly to save money.",
          "Because the canteen closed.",
          "Mainly for health reasons.",
          "To impress her colleagues."
         ],
         "answer": 2
        },
        {
         "q": "What surprising link did the study reveal?",
         "options": [
          "Cooking and weight gain.",
          "Exercise and anxiety.",
          "Sleep and appetite.",
          "Takeout meals and higher stress levels."
         ],
         "answer": 3
        },
        {
         "q": "According to the woman, why is cooking calming?",
         "options": [
          "It gives a sense of control and routine.",
          "It requires no skill.",
          "It is very cheap.",
          "It impresses others."
         ],
         "answer": 0
        },
        {
         "q": "What does the woman suggest the man do?",
         "options": [
          "Order greasy noodles.",
          "Skip lunch entirely.",
          "Eat out more often.",
          "Start small with two days a week."
         ],
         "answer": 3
        }
       ]
      }
     ]
    },
    "sectionB": {
     "title": "Section B —— 短文/讲座",
     "directions": "You will hear a passage followed by questions. Click ▶ to play, then choose the best answer.",
     "passages": [
      {
       "id": "p3b1",
       "script": "Most of us believe we make decisions based on careful reasoning. In reality, however, much of our behaviour is shaped by tiny details in our environment that we barely notice. This is the central insight of a field known as behavioural science.\nConsider a famous example from the Netherlands. At one airport, cleaning costs in the men's restrooms were extremely high. Then someone had a clever idea: they printed the image of a small fly near the centre of each urinal. Suddenly, men had something to aim at, and spillage dropped by around eighty percent. No rules, no signs, no punishment — just a tiny image that quietly changed behaviour.\nThis approach is often called a \"nudge\". A nudge is any small feature of the environment that gently steers people toward better choices without forbidding any options or changing economic incentives. Placing fruit at eye level in a cafeteria is a nudge; banning junk food is not.\nGovernments around the world have taken notice. Many have set up dedicated teams to apply these insights to public policy, from encouraging people to save for retirement to increasing tax payment rates. By simply changing the wording of a letter, one team helped collect millions in overdue taxes.\nCritics, however, raise an important question: is it ethical to influence people without their awareness? Supporters reply that the environment always influences us anyway, so we might as well design it to promote well-being. The debate is far from settled, but one thing is certain: the smallest details often have the largest effects.",
       "questions": [
        {
         "q": "What is the central insight of behavioural science mentioned?",
         "options": [
          "People always reason carefully.",
          "Rules are the best way to change behaviour.",
          "Tiny environmental details shape our behaviour.",
          "Decisions are purely economic."
         ],
         "answer": 2
        },
        {
         "q": "What did the image of a fly achieve at the airport?",
         "options": [
          "It reduced spillage by about eighty percent.",
          "It was quickly removed.",
          "It increased cleaning costs.",
          "It made people laugh."
         ],
         "answer": 0
        },
        {
         "q": "Which of the following is described as a 'nudge'?",
         "options": [
          "Banning junk food.",
          "Forbidding smoking.",
          "Placing fruit at eye level.",
          "Charging higher taxes."
         ],
         "answer": 2
        },
        {
         "q": "What ethical question do critics raise?",
         "options": [
          "Whether nudges cost too much.",
          "Whether governments work too slowly.",
          "Whether it is ethical to influence people without their awareness.",
          "Whether airports are clean enough."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "reading": {
    "time": 2400,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 选词填空（Word Bank）",
     "directions": "Select one word for each blank from the word bank. You may not use any word more than once.",
     "passage": "Sleep is something we all do, yet it remains one of the most 26 functions of the human body. For centuries, scientists 27 it as a passive state in which the brain simply shut down. Modern research, however, has completely 28 this view. Far from being idle, the sleeping brain is remarkably 29 , consolidating memories and clearing out harmful waste products.\n\nThe consequences of poor sleep are 30 . Studies have repeatedly linked chronic sleep deprivation to weakened immunity, impaired judgement, and a 31 risk of serious illness. Despite this, many people continue to treat sleep as 32 , sacrificing it for work or entertainment.\n\nExperts 33 that adults aim for seven to nine hours per night. They also recommend 34 habits such as avoiding screens before bed and keeping a regular schedule. Such simple measures, they argue, can 35 improve both physical and mental health.",
     "bank": [
      {
       "l": "A",
       "w": "optional"
      },
      {
       "l": "B",
       "w": "regarded"
      },
      {
       "l": "C",
       "w": "reward"
      },
      {
       "l": "D",
       "w": "healthy"
      },
      {
       "l": "E",
       "w": "ignore"
      },
      {
       "l": "F",
       "w": "dramatically"
      },
      {
       "l": "G",
       "w": "recommend"
      },
      {
       "l": "H",
       "w": "severe"
      },
      {
       "l": "I",
       "w": "destroyed"
      },
      {
       "l": "J",
       "w": "mysterious"
      },
      {
       "l": "K",
       "w": "overturned"
      },
      {
       "l": "L",
       "w": "active"
      },
      {
       "l": "M",
       "w": "heightened"
      },
      {
       "l": "N",
       "w": "occasionally"
      },
      {
       "l": "O",
       "w": "nearby"
      }
     ],
     "blanks": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35
     ],
     "answers": {
      "26": "J",
      "27": "B",
      "28": "K",
      "29": "L",
      "30": "H",
      "31": "M",
      "32": "A",
      "33": "G",
      "34": "D",
      "35": "F"
     }
    },
    "sectionC": {
     "title": "Section C —— 仔细阅读（Reading in Depth）",
     "directions": "There is a passage followed by questions. Choose the best answer.",
     "passages": [
      {
       "id": "p3r1",
       "source": "CET6 风格 自编篇章",
       "text": "Every year, millions of people make New Year's resolutions, and every year the vast majority abandon them within weeks. Gym memberships spike in January and collapse by February. Why are good intentions so difficult to sustain? Psychologists who study habit formation offer a surprising answer: the problem is rarely a lack of willpower. Instead, it is a misunderstanding of how habits actually work.\n\nMost people try to change their behaviour by focusing on outcomes — losing weight, saving money, reading more. But research suggests that focusing on identity is far more powerful. Rather than aiming to \"run a marathon\", it is more effective to think of oneself as \"a runner\". When a behaviour becomes part of who we are, it no longer requires constant willpower; it simply becomes what we do.\n\nEqually important is the role of the environment. We like to believe we are in control of our choices, but in fact our surroundings exert a powerful pull. A person trying to eat healthily will struggle if their kitchen is full of snacks, no matter how determined they are. The most successful habit-changers, therefore, do not rely on motivation alone. They redesign their environment to make good habits easy and bad habits difficult.\n\nFinally, experts emphasise the power of small steps. Ambitious goals feel inspiring but often prove overwhelming. A more reliable strategy is to start almost absurdly small — reading a single page, doing two push-ups — and let the habit grow naturally. The aim is not immediate transformation but consistency. As one researcher puts it, \"You do not rise to the level of your goals; you fall to the level of your systems.\"\n\nThis insight reframes the entire challenge of self-improvement. The question is no longer \"How can I find the motivation?\" but \"How can I build a system that makes the desired behaviour almost inevitable?\" For those who have struggled with broken resolutions, the message is both humbling and hopeful: lasting change comes not from heroic effort, but from intelligent design.",
       "questions": [
        {
         "num": 51,
         "q": "What surprising answer do psychologists offer about failed resolutions?",
         "options": [
          "People misunderstand how habits work.",
          "People dislike exercise.",
          "People simply lack willpower.",
          "People set goals too late in the year."
         ],
         "answer": 0
        },
        {
         "num": 52,
         "q": "Why is focusing on identity considered more powerful?",
         "options": [
          "It impresses other people.",
          "It costs less money.",
          "The behaviour no longer requires constant willpower.",
          "It guarantees instant results."
         ],
         "answer": 2
        },
        {
         "num": 53,
         "q": "What does the passage say about the environment?",
         "options": [
          "It should be ignored.",
          "It exerts a powerful pull on our behaviour.",
          "It only matters for athletes.",
          "It has little effect on our choices."
         ],
         "answer": 1
        },
        {
         "num": 54,
         "q": "What strategy do experts recommend for building habits?",
         "options": [
          "Relying purely on motivation.",
          "Changing everything at once.",
          "Setting the most ambitious goals possible.",
          "Starting absurdly small and building consistency."
         ],
         "answer": 3
        },
        {
         "num": 55,
         "q": "What does the researcher's quotation mainly suggest?",
         "options": [
          "Willpower is unlimited.",
          "Goals matter more than systems.",
          "Outcomes are determined by the systems we build.",
          "Motivation is the key to success."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "translation": {
    "time": 1800,
    "score": 106.5,
    "source": "2019年12月六级真题 真实题目",
    "kind": "translation",
    "directions": "Translate the passage from Chinese into English.",
    "text": "梅花位居中国十大名花之首，源于中国南方，已有三千多年的栽培历史。隆冬时节，五颜六色的梅花不畏严寒，迎着风雪傲然绽放。在中国传统文化中，梅花象征着坚强、纯洁、高雅，激励人们不畏艰难、砥砺前行。自古以来，许多诗人和画家从梅花中获取灵感，创作了无数不朽的作品。普通大众也都喜爱梅花，春节期间常用于家庭装饰。南京市已将梅花定为市花，每年举办梅花节，成千上万的人冒着严寒到梅花山踏雪赏梅。",
    "reference": "The plum blossom, ranking first among the top ten famous flowers in China, originated in southern China and has a cultivation history of over three thousand years. In the depth of winter, colourful plum blossoms brave the severe cold and bloom proudly against the wind and snow. In traditional Chinese culture, the plum blossom symbolizes strength, purity and elegance, inspiring people to forge ahead in spite of difficulties. Since ancient times, many poets and painters have drawn inspiration from the plum blossom and created countless immortal works. Ordinary people also love plum blossoms, which are often used for home decoration during the Spring Festival. The city of Nanjing has designated the plum blossom as its city flower and holds a plum blossom festival every year, when thousands of people brave the severe cold to enjoy the blossoms in the snow on Meihua Mountain.",
    "points": [
     "位居...之首 → rank first among",
     "十大名花 → the top ten famous flowers",
     "栽培历史 → cultivation history",
     "隆冬时节 → in the depth of winter",
     "不畏严寒 → brave the severe cold",
     "傲然绽放 → bloom proudly",
     "象征坚强、纯洁、高雅 → symbolize strength, purity and elegance",
     "砥砺前行 → forge ahead",
     "获取灵感 → draw inspiration",
     "不朽的作品 → immortal works",
     "定为市花 → designate as the city flower",
     "踏雪赏梅 → enjoy the blossoms in the snow"
    ]
   }
  },
  {
   "id": 4,
   "name": "第四套",
   "theme": "科技创新 · 北斗导航",
   "meta": {
    "title": "大学英语六级模拟考试（第四套）",
    "subtitle": "CET-6 Simulated Test · Paper 4",
    "totalTime": 7800,
    "fullScore": 710
   },
   "writing": {
    "time": 1800,
    "score": 106.5,
    "directions": "For this part, you are allowed 30 minutes to write an essay that begins with the sentence \"Nowadays, scientific and technological innovation is playing an increasingly vital role in national development.\" You can make comments, cite examples or use your personal experiences. You should write at least 150 words but no more than 200 words.",
    "minWords": 150,
    "maxWords": 200,
    "model": "Nowadays, scientific and technological innovation is playing an increasingly vital role in national development. This trend reflects broader social changes that deserve careful discussion.\n\nOn the one hand, the development brings tangible benefits to individuals and society, offering new opportunities for growth and cooperation. On the other hand, it also poses challenges that require thoughtful policies and responsible behaviour from all of us.\n\nFrom my perspective, what matters most is how we respond. By staying informed, adapting with an open mind, and acting with long-term vision, we can turn this trend into lasting progress rather than short-lived excitement.",
    "rubric": [
     "切题：围绕“年轻人重拾传统文化兴趣”，照抄给定首句",
     "结构：观点 + 原因分析 + 个人评价结论",
     "举例：汉服 / 诗词大会 / 短视频等具体现象",
     "语言：cultural revival / sense of identity / heritage 等表达",
     "字数：150–200 词",
     "连接：First / Second / In my opinion"
    ]
   },
   "listening": {
    "time": 1500,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 长对话",
     "directions": "You will hear two long conversations. Click ▶ to play, then choose the best answer.",
     "conversations": [
      {
       "id": "p4c1",
       "script": "W: Excuse me, is this the information desk for the City History Museum?\nM: Yes, it is. How can I help you today?\nW: I'm a university student researching local architecture. I was hoping to see the exhibition on ancient buildings, but I heard it might be closed.\nM: You're in luck. The main exhibition is open, though the east wing is under renovation until next month. The section on traditional wooden structures is actually our most popular display.\nW: That's exactly what I need. Is photography allowed? I'd like to take some pictures for my project.\nM: Photography is permitted in most areas, but flash is prohibited to protect the delicate models. There's also a free guided tour starting at two o'clock if you're interested.\nW: A guided tour would be wonderful. Do I need to book in advance?\nM: For individuals, no booking is required. Just gather near the central hall a few minutes before two. The guide today is one of our senior curators, so you'll get plenty of expert detail.\nW: Perfect. One more thing — is there a student discount on the entrance fee?\nM: Absolutely. With a valid student card, you pay half price. Just show it at the ticket counter over there.",
       "questions": [
        {
         "q": "Why has the woman come to the museum?",
         "options": [
          "To apply for a job.",
          "To research local architecture.",
          "To meet a friend.",
          "To attend a lecture."
         ],
         "answer": 1
        },
        {
         "q": "What does the man say about the east wing?",
         "options": [
          "It is permanently closed.",
          "It is the most popular display.",
          "It is open only to students.",
          "It is under renovation until next month."
         ],
         "answer": 3
        },
        {
         "q": "What rule about photography does the man mention?",
         "options": [
          "Photos cost extra.",
          "Flash is prohibited.",
          "Only curators may take photos.",
          "Photography is completely banned."
         ],
         "answer": 1
        },
        {
         "q": "How can the woman get a discount?",
         "options": [
          "By joining the guided tour.",
          "By booking online.",
          "By coming after two o'clock.",
          "By showing a valid student card."
         ],
         "answer": 3
        }
       ]
      },
      {
       "id": "p4c2",
       "script": "M: Sarah, I noticed you've started bringing your lunch to work every day. Trying to save money?\nW: Partly, but it's more about health, actually. I read a study last month that linked frequent takeout meals to higher stress levels, and it really made me think.\nM: Higher stress? I thought takeout just made you gain weight.\nW: That's what surprised me too. Apparently it's not only the calories. The researchers found that the lack of routine and the unpredictability of restaurant food can subtly increase anxiety over time.\nM: Huh. So cooking your own meals gives you a sense of control?\nW: Exactly. Planning and preparing food turns out to be a calming ritual for many people. Plus, I know exactly what goes into my meals.\nM: I have to admit, your lunches look much fresher than the greasy noodles I order. Maybe I should give it a try.\nW: You should. Start small — just two days a week. That's how I began. Now I genuinely look forward to my lunch break instead of feeling sluggish afterwards.\nM: Alright, you've convinced me. Could you share a few simple recipes?\nW: Of course. I'll send you my favourites tonight. They take fifteen minutes at most.",
       "questions": [
        {
         "q": "Why has the woman started bringing her own lunch?",
         "options": [
          "Mainly to save money.",
          "Because the canteen closed.",
          "Mainly for health reasons.",
          "To impress her colleagues."
         ],
         "answer": 2
        },
        {
         "q": "What surprising link did the study reveal?",
         "options": [
          "Cooking and weight gain.",
          "Exercise and anxiety.",
          "Sleep and appetite.",
          "Takeout meals and higher stress levels."
         ],
         "answer": 3
        },
        {
         "q": "According to the woman, why is cooking calming?",
         "options": [
          "It gives a sense of control and routine.",
          "It requires no skill.",
          "It is very cheap.",
          "It impresses others."
         ],
         "answer": 0
        },
        {
         "q": "What does the woman suggest the man do?",
         "options": [
          "Order greasy noodles.",
          "Skip lunch entirely.",
          "Eat out more often.",
          "Start small with two days a week."
         ],
         "answer": 3
        }
       ]
      }
     ]
    },
    "sectionB": {
     "title": "Section B —— 短文/讲座",
     "directions": "You will hear a passage followed by questions. Click ▶ to play, then choose the best answer.",
     "passages": [
      {
       "id": "p4b1",
       "script": "Most of us believe we make decisions based on careful reasoning. In reality, however, much of our behaviour is shaped by tiny details in our environment that we barely notice. This is the central insight of a field known as behavioural science.\nConsider a famous example from the Netherlands. At one airport, cleaning costs in the men's restrooms were extremely high. Then someone had a clever idea: they printed the image of a small fly near the centre of each urinal. Suddenly, men had something to aim at, and spillage dropped by around eighty percent. No rules, no signs, no punishment — just a tiny image that quietly changed behaviour.\nThis approach is often called a \"nudge\". A nudge is any small feature of the environment that gently steers people toward better choices without forbidding any options or changing economic incentives. Placing fruit at eye level in a cafeteria is a nudge; banning junk food is not.\nGovernments around the world have taken notice. Many have set up dedicated teams to apply these insights to public policy, from encouraging people to save for retirement to increasing tax payment rates. By simply changing the wording of a letter, one team helped collect millions in overdue taxes.\nCritics, however, raise an important question: is it ethical to influence people without their awareness? Supporters reply that the environment always influences us anyway, so we might as well design it to promote well-being. The debate is far from settled, but one thing is certain: the smallest details often have the largest effects.",
       "questions": [
        {
         "q": "What is the central insight of behavioural science mentioned?",
         "options": [
          "People always reason carefully.",
          "Rules are the best way to change behaviour.",
          "Tiny environmental details shape our behaviour.",
          "Decisions are purely economic."
         ],
         "answer": 2
        },
        {
         "q": "What did the image of a fly achieve at the airport?",
         "options": [
          "It reduced spillage by about eighty percent.",
          "It was quickly removed.",
          "It increased cleaning costs.",
          "It made people laugh."
         ],
         "answer": 0
        },
        {
         "q": "Which of the following is described as a 'nudge'?",
         "options": [
          "Banning junk food.",
          "Forbidding smoking.",
          "Placing fruit at eye level.",
          "Charging higher taxes."
         ],
         "answer": 2
        },
        {
         "q": "What ethical question do critics raise?",
         "options": [
          "Whether nudges cost too much.",
          "Whether governments work too slowly.",
          "Whether it is ethical to influence people without their awareness.",
          "Whether airports are clean enough."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "reading": {
    "time": 2400,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 选词填空（Word Bank）",
     "directions": "Select one word for each blank from the word bank. You may not use any word more than once.",
     "passage": "Sleep is something we all do, yet it remains one of the most 26 functions of the human body. For centuries, scientists 27 it as a passive state in which the brain simply shut down. Modern research, however, has completely 28 this view. Far from being idle, the sleeping brain is remarkably 29 , consolidating memories and clearing out harmful waste products.\n\nThe consequences of poor sleep are 30 . Studies have repeatedly linked chronic sleep deprivation to weakened immunity, impaired judgement, and a 31 risk of serious illness. Despite this, many people continue to treat sleep as 32 , sacrificing it for work or entertainment.\n\nExperts 33 that adults aim for seven to nine hours per night. They also recommend 34 habits such as avoiding screens before bed and keeping a regular schedule. Such simple measures, they argue, can 35 improve both physical and mental health.",
     "bank": [
      {
       "l": "A",
       "w": "optional"
      },
      {
       "l": "B",
       "w": "regarded"
      },
      {
       "l": "C",
       "w": "reward"
      },
      {
       "l": "D",
       "w": "healthy"
      },
      {
       "l": "E",
       "w": "ignore"
      },
      {
       "l": "F",
       "w": "dramatically"
      },
      {
       "l": "G",
       "w": "recommend"
      },
      {
       "l": "H",
       "w": "severe"
      },
      {
       "l": "I",
       "w": "destroyed"
      },
      {
       "l": "J",
       "w": "mysterious"
      },
      {
       "l": "K",
       "w": "overturned"
      },
      {
       "l": "L",
       "w": "active"
      },
      {
       "l": "M",
       "w": "heightened"
      },
      {
       "l": "N",
       "w": "occasionally"
      },
      {
       "l": "O",
       "w": "nearby"
      }
     ],
     "blanks": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35
     ],
     "answers": {
      "26": "J",
      "27": "B",
      "28": "K",
      "29": "L",
      "30": "H",
      "31": "M",
      "32": "A",
      "33": "G",
      "34": "D",
      "35": "F"
     }
    },
    "sectionC": {
     "title": "Section C —— 仔细阅读（Reading in Depth）",
     "directions": "There is a passage followed by questions. Choose the best answer.",
     "passages": [
      {
       "id": "p4r1",
       "source": "CET6 风格 自编篇章",
       "text": "Every year, millions of people make New Year's resolutions, and every year the vast majority abandon them within weeks. Gym memberships spike in January and collapse by February. Why are good intentions so difficult to sustain? Psychologists who study habit formation offer a surprising answer: the problem is rarely a lack of willpower. Instead, it is a misunderstanding of how habits actually work.\n\nMost people try to change their behaviour by focusing on outcomes — losing weight, saving money, reading more. But research suggests that focusing on identity is far more powerful. Rather than aiming to \"run a marathon\", it is more effective to think of oneself as \"a runner\". When a behaviour becomes part of who we are, it no longer requires constant willpower; it simply becomes what we do.\n\nEqually important is the role of the environment. We like to believe we are in control of our choices, but in fact our surroundings exert a powerful pull. A person trying to eat healthily will struggle if their kitchen is full of snacks, no matter how determined they are. The most successful habit-changers, therefore, do not rely on motivation alone. They redesign their environment to make good habits easy and bad habits difficult.\n\nFinally, experts emphasise the power of small steps. Ambitious goals feel inspiring but often prove overwhelming. A more reliable strategy is to start almost absurdly small — reading a single page, doing two push-ups — and let the habit grow naturally. The aim is not immediate transformation but consistency. As one researcher puts it, \"You do not rise to the level of your goals; you fall to the level of your systems.\"\n\nThis insight reframes the entire challenge of self-improvement. The question is no longer \"How can I find the motivation?\" but \"How can I build a system that makes the desired behaviour almost inevitable?\" For those who have struggled with broken resolutions, the message is both humbling and hopeful: lasting change comes not from heroic effort, but from intelligent design.",
       "questions": [
        {
         "num": 51,
         "q": "What surprising answer do psychologists offer about failed resolutions?",
         "options": [
          "People misunderstand how habits work.",
          "People dislike exercise.",
          "People simply lack willpower.",
          "People set goals too late in the year."
         ],
         "answer": 0
        },
        {
         "num": 52,
         "q": "Why is focusing on identity considered more powerful?",
         "options": [
          "It impresses other people.",
          "It costs less money.",
          "The behaviour no longer requires constant willpower.",
          "It guarantees instant results."
         ],
         "answer": 2
        },
        {
         "num": 53,
         "q": "What does the passage say about the environment?",
         "options": [
          "It should be ignored.",
          "It exerts a powerful pull on our behaviour.",
          "It only matters for athletes.",
          "It has little effect on our choices."
         ],
         "answer": 1
        },
        {
         "num": 54,
         "q": "What strategy do experts recommend for building habits?",
         "options": [
          "Relying purely on motivation.",
          "Changing everything at once.",
          "Setting the most ambitious goals possible.",
          "Starting absurdly small and building consistency."
         ],
         "answer": 3
        },
        {
         "num": 55,
         "q": "What does the researcher's quotation mainly suggest?",
         "options": [
          "Willpower is unlimited.",
          "Goals matter more than systems.",
          "Outcomes are determined by the systems we build.",
          "Motivation is the key to success."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "translation": {
    "time": 1800,
    "score": 106.5,
    "source": "2024年12月六级真题 真实题目",
    "kind": "translation",
    "directions": "Translate the passage from Chinese into English.",
    "text": "北斗（Beidou）卫星导航系统的成功研制是中国自改革开放以来取得的一项重大科技成就。研发人员经过不懈努力，攻克了一系列技术难题，北斗系统最终实现了全球覆盖和高精度定位，使中国成为世界上少数几个独立拥有全球卫星导航系统的国家之一。北斗系统已广泛应用于交通运输、灾害救援、天气预报、公共安全等诸多领域。北斗系统现在已经在国际上得到广泛认可，开始为越来越多的国家和地区提供优质服务。",
    "reference": "The successful development of the BeiDou Navigation Satellite System is a major scientific and technological achievement China has made since reform and opening up. After relentless efforts, researchers overcame a series of technical challenges, and the BeiDou system finally achieved global coverage and high-precision positioning, making China one of the few countries in the world that independently owns a global satellite navigation system. The BeiDou system has been widely applied in fields such as transportation, disaster relief, weather forecasting and public security. It is now widely recognized internationally and is beginning to provide high-quality services to more and more countries and regions.",
    "points": [
     "重大科技成就 → a major scientific and technological achievement",
     "改革开放以来 → since reform and opening up",
     "攻克技术难题 → overcome technical challenges",
     "全球覆盖 → global coverage",
     "高精度定位 → high-precision positioning",
     "广泛应用于 → be widely applied in",
     "灾害救援 → disaster relief",
     "得到广泛认可 → be widely recognized"
    ]
   }
  },
  {
   "id": 5,
   "name": "第五套",
   "theme": "智慧港口 · 洋山港",
   "meta": {
    "title": "大学英语六级模拟考试（第五套）",
    "subtitle": "CET-6 Simulated Test · Paper 5",
    "totalTime": 7800,
    "fullScore": 710
   },
   "writing": {
    "time": 1800,
    "score": 106.5,
    "directions": "For this part, you are allowed 30 minutes to write an essay that begins with the sentence \"Nowadays, automation and digital technology are transforming traditional industries at an unprecedented pace.\" You can make comments, cite examples or use your personal experiences. You should write at least 150 words but no more than 200 words.",
    "minWords": 150,
    "maxWords": 200,
    "model": "Nowadays, automation and digital technology are transforming traditional industries at an unprecedented pace. This trend reflects broader social changes that deserve careful discussion.\n\nOn the one hand, the development brings tangible benefits to individuals and society, offering new opportunities for growth and cooperation. On the other hand, it also poses challenges that require thoughtful policies and responsible behaviour from all of us.\n\nFrom my perspective, what matters most is how we respond. By staying informed, adapting with an open mind, and acting with long-term vision, we can turn this trend into lasting progress rather than short-lived excitement.",
    "rubric": [
     "切题：围绕“年轻人重拾传统文化兴趣”，照抄给定首句",
     "结构：观点 + 原因分析 + 个人评价结论",
     "举例：汉服 / 诗词大会 / 短视频等具体现象",
     "语言：cultural revival / sense of identity / heritage 等表达",
     "字数：150–200 词",
     "连接：First / Second / In my opinion"
    ]
   },
   "listening": {
    "time": 1500,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 长对话",
     "directions": "You will hear two long conversations. Click ▶ to play, then choose the best answer.",
     "conversations": [
      {
       "id": "p5c1",
       "script": "W: Excuse me, is this the information desk for the City History Museum?\nM: Yes, it is. How can I help you today?\nW: I'm a university student researching local architecture. I was hoping to see the exhibition on ancient buildings, but I heard it might be closed.\nM: You're in luck. The main exhibition is open, though the east wing is under renovation until next month. The section on traditional wooden structures is actually our most popular display.\nW: That's exactly what I need. Is photography allowed? I'd like to take some pictures for my project.\nM: Photography is permitted in most areas, but flash is prohibited to protect the delicate models. There's also a free guided tour starting at two o'clock if you're interested.\nW: A guided tour would be wonderful. Do I need to book in advance?\nM: For individuals, no booking is required. Just gather near the central hall a few minutes before two. The guide today is one of our senior curators, so you'll get plenty of expert detail.\nW: Perfect. One more thing — is there a student discount on the entrance fee?\nM: Absolutely. With a valid student card, you pay half price. Just show it at the ticket counter over there.",
       "questions": [
        {
         "q": "Why has the woman come to the museum?",
         "options": [
          "To apply for a job.",
          "To research local architecture.",
          "To meet a friend.",
          "To attend a lecture."
         ],
         "answer": 1
        },
        {
         "q": "What does the man say about the east wing?",
         "options": [
          "It is permanently closed.",
          "It is the most popular display.",
          "It is open only to students.",
          "It is under renovation until next month."
         ],
         "answer": 3
        },
        {
         "q": "What rule about photography does the man mention?",
         "options": [
          "Photos cost extra.",
          "Flash is prohibited.",
          "Only curators may take photos.",
          "Photography is completely banned."
         ],
         "answer": 1
        },
        {
         "q": "How can the woman get a discount?",
         "options": [
          "By joining the guided tour.",
          "By booking online.",
          "By coming after two o'clock.",
          "By showing a valid student card."
         ],
         "answer": 3
        }
       ]
      },
      {
       "id": "p5c2",
       "script": "M: Sarah, I noticed you've started bringing your lunch to work every day. Trying to save money?\nW: Partly, but it's more about health, actually. I read a study last month that linked frequent takeout meals to higher stress levels, and it really made me think.\nM: Higher stress? I thought takeout just made you gain weight.\nW: That's what surprised me too. Apparently it's not only the calories. The researchers found that the lack of routine and the unpredictability of restaurant food can subtly increase anxiety over time.\nM: Huh. So cooking your own meals gives you a sense of control?\nW: Exactly. Planning and preparing food turns out to be a calming ritual for many people. Plus, I know exactly what goes into my meals.\nM: I have to admit, your lunches look much fresher than the greasy noodles I order. Maybe I should give it a try.\nW: You should. Start small — just two days a week. That's how I began. Now I genuinely look forward to my lunch break instead of feeling sluggish afterwards.\nM: Alright, you've convinced me. Could you share a few simple recipes?\nW: Of course. I'll send you my favourites tonight. They take fifteen minutes at most.",
       "questions": [
        {
         "q": "Why has the woman started bringing her own lunch?",
         "options": [
          "Mainly to save money.",
          "Because the canteen closed.",
          "Mainly for health reasons.",
          "To impress her colleagues."
         ],
         "answer": 2
        },
        {
         "q": "What surprising link did the study reveal?",
         "options": [
          "Cooking and weight gain.",
          "Exercise and anxiety.",
          "Sleep and appetite.",
          "Takeout meals and higher stress levels."
         ],
         "answer": 3
        },
        {
         "q": "According to the woman, why is cooking calming?",
         "options": [
          "It gives a sense of control and routine.",
          "It requires no skill.",
          "It is very cheap.",
          "It impresses others."
         ],
         "answer": 0
        },
        {
         "q": "What does the woman suggest the man do?",
         "options": [
          "Order greasy noodles.",
          "Skip lunch entirely.",
          "Eat out more often.",
          "Start small with two days a week."
         ],
         "answer": 3
        }
       ]
      }
     ]
    },
    "sectionB": {
     "title": "Section B —— 短文/讲座",
     "directions": "You will hear a passage followed by questions. Click ▶ to play, then choose the best answer.",
     "passages": [
      {
       "id": "p5b1",
       "script": "Most of us believe we make decisions based on careful reasoning. In reality, however, much of our behaviour is shaped by tiny details in our environment that we barely notice. This is the central insight of a field known as behavioural science.\nConsider a famous example from the Netherlands. At one airport, cleaning costs in the men's restrooms were extremely high. Then someone had a clever idea: they printed the image of a small fly near the centre of each urinal. Suddenly, men had something to aim at, and spillage dropped by around eighty percent. No rules, no signs, no punishment — just a tiny image that quietly changed behaviour.\nThis approach is often called a \"nudge\". A nudge is any small feature of the environment that gently steers people toward better choices without forbidding any options or changing economic incentives. Placing fruit at eye level in a cafeteria is a nudge; banning junk food is not.\nGovernments around the world have taken notice. Many have set up dedicated teams to apply these insights to public policy, from encouraging people to save for retirement to increasing tax payment rates. By simply changing the wording of a letter, one team helped collect millions in overdue taxes.\nCritics, however, raise an important question: is it ethical to influence people without their awareness? Supporters reply that the environment always influences us anyway, so we might as well design it to promote well-being. The debate is far from settled, but one thing is certain: the smallest details often have the largest effects.",
       "questions": [
        {
         "q": "What is the central insight of behavioural science mentioned?",
         "options": [
          "People always reason carefully.",
          "Rules are the best way to change behaviour.",
          "Tiny environmental details shape our behaviour.",
          "Decisions are purely economic."
         ],
         "answer": 2
        },
        {
         "q": "What did the image of a fly achieve at the airport?",
         "options": [
          "It reduced spillage by about eighty percent.",
          "It was quickly removed.",
          "It increased cleaning costs.",
          "It made people laugh."
         ],
         "answer": 0
        },
        {
         "q": "Which of the following is described as a 'nudge'?",
         "options": [
          "Banning junk food.",
          "Forbidding smoking.",
          "Placing fruit at eye level.",
          "Charging higher taxes."
         ],
         "answer": 2
        },
        {
         "q": "What ethical question do critics raise?",
         "options": [
          "Whether nudges cost too much.",
          "Whether governments work too slowly.",
          "Whether it is ethical to influence people without their awareness.",
          "Whether airports are clean enough."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "reading": {
    "time": 2400,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 选词填空（Word Bank）",
     "directions": "Select one word for each blank from the word bank. You may not use any word more than once.",
     "passage": "Sleep is something we all do, yet it remains one of the most 26 functions of the human body. For centuries, scientists 27 it as a passive state in which the brain simply shut down. Modern research, however, has completely 28 this view. Far from being idle, the sleeping brain is remarkably 29 , consolidating memories and clearing out harmful waste products.\n\nThe consequences of poor sleep are 30 . Studies have repeatedly linked chronic sleep deprivation to weakened immunity, impaired judgement, and a 31 risk of serious illness. Despite this, many people continue to treat sleep as 32 , sacrificing it for work or entertainment.\n\nExperts 33 that adults aim for seven to nine hours per night. They also recommend 34 habits such as avoiding screens before bed and keeping a regular schedule. Such simple measures, they argue, can 35 improve both physical and mental health.",
     "bank": [
      {
       "l": "A",
       "w": "optional"
      },
      {
       "l": "B",
       "w": "regarded"
      },
      {
       "l": "C",
       "w": "reward"
      },
      {
       "l": "D",
       "w": "healthy"
      },
      {
       "l": "E",
       "w": "ignore"
      },
      {
       "l": "F",
       "w": "dramatically"
      },
      {
       "l": "G",
       "w": "recommend"
      },
      {
       "l": "H",
       "w": "severe"
      },
      {
       "l": "I",
       "w": "destroyed"
      },
      {
       "l": "J",
       "w": "mysterious"
      },
      {
       "l": "K",
       "w": "overturned"
      },
      {
       "l": "L",
       "w": "active"
      },
      {
       "l": "M",
       "w": "heightened"
      },
      {
       "l": "N",
       "w": "occasionally"
      },
      {
       "l": "O",
       "w": "nearby"
      }
     ],
     "blanks": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35
     ],
     "answers": {
      "26": "J",
      "27": "B",
      "28": "K",
      "29": "L",
      "30": "H",
      "31": "M",
      "32": "A",
      "33": "G",
      "34": "D",
      "35": "F"
     }
    },
    "sectionC": {
     "title": "Section C —— 仔细阅读（Reading in Depth）",
     "directions": "There is a passage followed by questions. Choose the best answer.",
     "passages": [
      {
       "id": "p5r1",
       "source": "CET6 风格 自编篇章",
       "text": "Every year, millions of people make New Year's resolutions, and every year the vast majority abandon them within weeks. Gym memberships spike in January and collapse by February. Why are good intentions so difficult to sustain? Psychologists who study habit formation offer a surprising answer: the problem is rarely a lack of willpower. Instead, it is a misunderstanding of how habits actually work.\n\nMost people try to change their behaviour by focusing on outcomes — losing weight, saving money, reading more. But research suggests that focusing on identity is far more powerful. Rather than aiming to \"run a marathon\", it is more effective to think of oneself as \"a runner\". When a behaviour becomes part of who we are, it no longer requires constant willpower; it simply becomes what we do.\n\nEqually important is the role of the environment. We like to believe we are in control of our choices, but in fact our surroundings exert a powerful pull. A person trying to eat healthily will struggle if their kitchen is full of snacks, no matter how determined they are. The most successful habit-changers, therefore, do not rely on motivation alone. They redesign their environment to make good habits easy and bad habits difficult.\n\nFinally, experts emphasise the power of small steps. Ambitious goals feel inspiring but often prove overwhelming. A more reliable strategy is to start almost absurdly small — reading a single page, doing two push-ups — and let the habit grow naturally. The aim is not immediate transformation but consistency. As one researcher puts it, \"You do not rise to the level of your goals; you fall to the level of your systems.\"\n\nThis insight reframes the entire challenge of self-improvement. The question is no longer \"How can I find the motivation?\" but \"How can I build a system that makes the desired behaviour almost inevitable?\" For those who have struggled with broken resolutions, the message is both humbling and hopeful: lasting change comes not from heroic effort, but from intelligent design.",
       "questions": [
        {
         "num": 51,
         "q": "What surprising answer do psychologists offer about failed resolutions?",
         "options": [
          "People misunderstand how habits work.",
          "People dislike exercise.",
          "People simply lack willpower.",
          "People set goals too late in the year."
         ],
         "answer": 0
        },
        {
         "num": 52,
         "q": "Why is focusing on identity considered more powerful?",
         "options": [
          "It impresses other people.",
          "It costs less money.",
          "The behaviour no longer requires constant willpower.",
          "It guarantees instant results."
         ],
         "answer": 2
        },
        {
         "num": 53,
         "q": "What does the passage say about the environment?",
         "options": [
          "It should be ignored.",
          "It exerts a powerful pull on our behaviour.",
          "It only matters for athletes.",
          "It has little effect on our choices."
         ],
         "answer": 1
        },
        {
         "num": 54,
         "q": "What strategy do experts recommend for building habits?",
         "options": [
          "Relying purely on motivation.",
          "Changing everything at once.",
          "Setting the most ambitious goals possible.",
          "Starting absurdly small and building consistency."
         ],
         "answer": 3
        },
        {
         "num": 55,
         "q": "What does the researcher's quotation mainly suggest?",
         "options": [
          "Willpower is unlimited.",
          "Goals matter more than systems.",
          "Outcomes are determined by the systems we build.",
          "Motivation is the key to success."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "translation": {
    "time": 1800,
    "score": 106.5,
    "source": "2024年12月六级真题 真实题目",
    "kind": "translation",
    "directions": "Translate the passage from Chinese into English.",
    "text": "洋山港（Yangshan Port）是上海航运中心的重要组成部分，是中国第一个深水港，也是世界上规模最大的深水港之一。经过近20年的发展，洋山港已实现高度自动化。数字技术和人工智能的使用大大减少了用工成本和碳排放。自主研发的码头管理系统可以在百公里之外对大型设备进行远程操控。洋山港看上去一片繁忙，现场却见不到人工操作，而且能够24小时不间断运作。洋山港将不断发展，为把上海建成一个全球航运中心做出更大贡献。",
    "reference": "Yangshan Port is an important part of the Shanghai international shipping centre. It is China's first deep-water port and one of the largest deep-water ports in the world. After nearly 20 years of development, Yangshan Port has achieved a high degree of automation. The use of digital technology and artificial intelligence has greatly reduced labour costs and carbon emissions. The independently developed terminal management system enables remote control of large equipment from hundreds of kilometres away. Yangshan Port looks busy, yet no manual operation is seen on site, and it can operate around the clock without interruption. Yangshan Port will continue to develop and make greater contributions to building Shanghai into a global shipping centre.",
    "points": [
     "深水港 → deep-water port",
     "高度自动化 → a high degree of automation",
     "用工成本 → labour costs",
     "碳排放 → carbon emissions",
     "远程操控 → remote control",
     "24小时不间断运作 → operate around the clock without interruption",
     "航运中心 → shipping centre"
    ]
   }
  },
  {
   "id": 6,
   "name": "第六套",
   "theme": "航天强国 · 空间站",
   "meta": {
    "title": "大学英语六级模拟考试（第六套）",
    "subtitle": "CET-6 Simulated Test · Paper 6",
    "totalTime": 7800,
    "fullScore": 710
   },
   "writing": {
    "time": 1800,
    "score": 106.5,
    "directions": "For this part, you are allowed 30 minutes to write an essay that begins with the sentence \"Nowadays, space exploration has become a symbol of a nation's comprehensive strength and innovative capacity.\" You can make comments, cite examples or use your personal experiences. You should write at least 150 words but no more than 200 words.",
    "minWords": 150,
    "maxWords": 200,
    "model": "Nowadays, space exploration has become a symbol of a nation's comprehensive strength and innovative capacity. This trend reflects broader social changes that deserve careful discussion.\n\nOn the one hand, the development brings tangible benefits to individuals and society, offering new opportunities for growth and cooperation. On the other hand, it also poses challenges that require thoughtful policies and responsible behaviour from all of us.\n\nFrom my perspective, what matters most is how we respond. By staying informed, adapting with an open mind, and acting with long-term vision, we can turn this trend into lasting progress rather than short-lived excitement.",
    "rubric": [
     "切题：围绕“年轻人重拾传统文化兴趣”，照抄给定首句",
     "结构：观点 + 原因分析 + 个人评价结论",
     "举例：汉服 / 诗词大会 / 短视频等具体现象",
     "语言：cultural revival / sense of identity / heritage 等表达",
     "字数：150–200 词",
     "连接：First / Second / In my opinion"
    ]
   },
   "listening": {
    "time": 1500,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 长对话",
     "directions": "You will hear two long conversations. Click ▶ to play, then choose the best answer.",
     "conversations": [
      {
       "id": "p6c1",
       "script": "W: Excuse me, is this the information desk for the City History Museum?\nM: Yes, it is. How can I help you today?\nW: I'm a university student researching local architecture. I was hoping to see the exhibition on ancient buildings, but I heard it might be closed.\nM: You're in luck. The main exhibition is open, though the east wing is under renovation until next month. The section on traditional wooden structures is actually our most popular display.\nW: That's exactly what I need. Is photography allowed? I'd like to take some pictures for my project.\nM: Photography is permitted in most areas, but flash is prohibited to protect the delicate models. There's also a free guided tour starting at two o'clock if you're interested.\nW: A guided tour would be wonderful. Do I need to book in advance?\nM: For individuals, no booking is required. Just gather near the central hall a few minutes before two. The guide today is one of our senior curators, so you'll get plenty of expert detail.\nW: Perfect. One more thing — is there a student discount on the entrance fee?\nM: Absolutely. With a valid student card, you pay half price. Just show it at the ticket counter over there.",
       "questions": [
        {
         "q": "Why has the woman come to the museum?",
         "options": [
          "To apply for a job.",
          "To research local architecture.",
          "To meet a friend.",
          "To attend a lecture."
         ],
         "answer": 1
        },
        {
         "q": "What does the man say about the east wing?",
         "options": [
          "It is permanently closed.",
          "It is the most popular display.",
          "It is open only to students.",
          "It is under renovation until next month."
         ],
         "answer": 3
        },
        {
         "q": "What rule about photography does the man mention?",
         "options": [
          "Photos cost extra.",
          "Flash is prohibited.",
          "Only curators may take photos.",
          "Photography is completely banned."
         ],
         "answer": 1
        },
        {
         "q": "How can the woman get a discount?",
         "options": [
          "By joining the guided tour.",
          "By booking online.",
          "By coming after two o'clock.",
          "By showing a valid student card."
         ],
         "answer": 3
        }
       ]
      },
      {
       "id": "p6c2",
       "script": "M: Sarah, I noticed you've started bringing your lunch to work every day. Trying to save money?\nW: Partly, but it's more about health, actually. I read a study last month that linked frequent takeout meals to higher stress levels, and it really made me think.\nM: Higher stress? I thought takeout just made you gain weight.\nW: That's what surprised me too. Apparently it's not only the calories. The researchers found that the lack of routine and the unpredictability of restaurant food can subtly increase anxiety over time.\nM: Huh. So cooking your own meals gives you a sense of control?\nW: Exactly. Planning and preparing food turns out to be a calming ritual for many people. Plus, I know exactly what goes into my meals.\nM: I have to admit, your lunches look much fresher than the greasy noodles I order. Maybe I should give it a try.\nW: You should. Start small — just two days a week. That's how I began. Now I genuinely look forward to my lunch break instead of feeling sluggish afterwards.\nM: Alright, you've convinced me. Could you share a few simple recipes?\nW: Of course. I'll send you my favourites tonight. They take fifteen minutes at most.",
       "questions": [
        {
         "q": "Why has the woman started bringing her own lunch?",
         "options": [
          "Mainly to save money.",
          "Because the canteen closed.",
          "Mainly for health reasons.",
          "To impress her colleagues."
         ],
         "answer": 2
        },
        {
         "q": "What surprising link did the study reveal?",
         "options": [
          "Cooking and weight gain.",
          "Exercise and anxiety.",
          "Sleep and appetite.",
          "Takeout meals and higher stress levels."
         ],
         "answer": 3
        },
        {
         "q": "According to the woman, why is cooking calming?",
         "options": [
          "It gives a sense of control and routine.",
          "It requires no skill.",
          "It is very cheap.",
          "It impresses others."
         ],
         "answer": 0
        },
        {
         "q": "What does the woman suggest the man do?",
         "options": [
          "Order greasy noodles.",
          "Skip lunch entirely.",
          "Eat out more often.",
          "Start small with two days a week."
         ],
         "answer": 3
        }
       ]
      }
     ]
    },
    "sectionB": {
     "title": "Section B —— 短文/讲座",
     "directions": "You will hear a passage followed by questions. Click ▶ to play, then choose the best answer.",
     "passages": [
      {
       "id": "p6b1",
       "script": "Most of us believe we make decisions based on careful reasoning. In reality, however, much of our behaviour is shaped by tiny details in our environment that we barely notice. This is the central insight of a field known as behavioural science.\nConsider a famous example from the Netherlands. At one airport, cleaning costs in the men's restrooms were extremely high. Then someone had a clever idea: they printed the image of a small fly near the centre of each urinal. Suddenly, men had something to aim at, and spillage dropped by around eighty percent. No rules, no signs, no punishment — just a tiny image that quietly changed behaviour.\nThis approach is often called a \"nudge\". A nudge is any small feature of the environment that gently steers people toward better choices without forbidding any options or changing economic incentives. Placing fruit at eye level in a cafeteria is a nudge; banning junk food is not.\nGovernments around the world have taken notice. Many have set up dedicated teams to apply these insights to public policy, from encouraging people to save for retirement to increasing tax payment rates. By simply changing the wording of a letter, one team helped collect millions in overdue taxes.\nCritics, however, raise an important question: is it ethical to influence people without their awareness? Supporters reply that the environment always influences us anyway, so we might as well design it to promote well-being. The debate is far from settled, but one thing is certain: the smallest details often have the largest effects.",
       "questions": [
        {
         "q": "What is the central insight of behavioural science mentioned?",
         "options": [
          "People always reason carefully.",
          "Rules are the best way to change behaviour.",
          "Tiny environmental details shape our behaviour.",
          "Decisions are purely economic."
         ],
         "answer": 2
        },
        {
         "q": "What did the image of a fly achieve at the airport?",
         "options": [
          "It reduced spillage by about eighty percent.",
          "It was quickly removed.",
          "It increased cleaning costs.",
          "It made people laugh."
         ],
         "answer": 0
        },
        {
         "q": "Which of the following is described as a 'nudge'?",
         "options": [
          "Banning junk food.",
          "Forbidding smoking.",
          "Placing fruit at eye level.",
          "Charging higher taxes."
         ],
         "answer": 2
        },
        {
         "q": "What ethical question do critics raise?",
         "options": [
          "Whether nudges cost too much.",
          "Whether governments work too slowly.",
          "Whether it is ethical to influence people without their awareness.",
          "Whether airports are clean enough."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "reading": {
    "time": 2400,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 选词填空（Word Bank）",
     "directions": "Select one word for each blank from the word bank. You may not use any word more than once.",
     "passage": "Sleep is something we all do, yet it remains one of the most 26 functions of the human body. For centuries, scientists 27 it as a passive state in which the brain simply shut down. Modern research, however, has completely 28 this view. Far from being idle, the sleeping brain is remarkably 29 , consolidating memories and clearing out harmful waste products.\n\nThe consequences of poor sleep are 30 . Studies have repeatedly linked chronic sleep deprivation to weakened immunity, impaired judgement, and a 31 risk of serious illness. Despite this, many people continue to treat sleep as 32 , sacrificing it for work or entertainment.\n\nExperts 33 that adults aim for seven to nine hours per night. They also recommend 34 habits such as avoiding screens before bed and keeping a regular schedule. Such simple measures, they argue, can 35 improve both physical and mental health.",
     "bank": [
      {
       "l": "A",
       "w": "optional"
      },
      {
       "l": "B",
       "w": "regarded"
      },
      {
       "l": "C",
       "w": "reward"
      },
      {
       "l": "D",
       "w": "healthy"
      },
      {
       "l": "E",
       "w": "ignore"
      },
      {
       "l": "F",
       "w": "dramatically"
      },
      {
       "l": "G",
       "w": "recommend"
      },
      {
       "l": "H",
       "w": "severe"
      },
      {
       "l": "I",
       "w": "destroyed"
      },
      {
       "l": "J",
       "w": "mysterious"
      },
      {
       "l": "K",
       "w": "overturned"
      },
      {
       "l": "L",
       "w": "active"
      },
      {
       "l": "M",
       "w": "heightened"
      },
      {
       "l": "N",
       "w": "occasionally"
      },
      {
       "l": "O",
       "w": "nearby"
      }
     ],
     "blanks": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35
     ],
     "answers": {
      "26": "J",
      "27": "B",
      "28": "K",
      "29": "L",
      "30": "H",
      "31": "M",
      "32": "A",
      "33": "G",
      "34": "D",
      "35": "F"
     }
    },
    "sectionC": {
     "title": "Section C —— 仔细阅读（Reading in Depth）",
     "directions": "There is a passage followed by questions. Choose the best answer.",
     "passages": [
      {
       "id": "p6r1",
       "source": "CET6 风格 自编篇章",
       "text": "Every year, millions of people make New Year's resolutions, and every year the vast majority abandon them within weeks. Gym memberships spike in January and collapse by February. Why are good intentions so difficult to sustain? Psychologists who study habit formation offer a surprising answer: the problem is rarely a lack of willpower. Instead, it is a misunderstanding of how habits actually work.\n\nMost people try to change their behaviour by focusing on outcomes — losing weight, saving money, reading more. But research suggests that focusing on identity is far more powerful. Rather than aiming to \"run a marathon\", it is more effective to think of oneself as \"a runner\". When a behaviour becomes part of who we are, it no longer requires constant willpower; it simply becomes what we do.\n\nEqually important is the role of the environment. We like to believe we are in control of our choices, but in fact our surroundings exert a powerful pull. A person trying to eat healthily will struggle if their kitchen is full of snacks, no matter how determined they are. The most successful habit-changers, therefore, do not rely on motivation alone. They redesign their environment to make good habits easy and bad habits difficult.\n\nFinally, experts emphasise the power of small steps. Ambitious goals feel inspiring but often prove overwhelming. A more reliable strategy is to start almost absurdly small — reading a single page, doing two push-ups — and let the habit grow naturally. The aim is not immediate transformation but consistency. As one researcher puts it, \"You do not rise to the level of your goals; you fall to the level of your systems.\"\n\nThis insight reframes the entire challenge of self-improvement. The question is no longer \"How can I find the motivation?\" but \"How can I build a system that makes the desired behaviour almost inevitable?\" For those who have struggled with broken resolutions, the message is both humbling and hopeful: lasting change comes not from heroic effort, but from intelligent design.",
       "questions": [
        {
         "num": 51,
         "q": "What surprising answer do psychologists offer about failed resolutions?",
         "options": [
          "People misunderstand how habits work.",
          "People dislike exercise.",
          "People simply lack willpower.",
          "People set goals too late in the year."
         ],
         "answer": 0
        },
        {
         "num": 52,
         "q": "Why is focusing on identity considered more powerful?",
         "options": [
          "It impresses other people.",
          "It costs less money.",
          "The behaviour no longer requires constant willpower.",
          "It guarantees instant results."
         ],
         "answer": 2
        },
        {
         "num": 53,
         "q": "What does the passage say about the environment?",
         "options": [
          "It should be ignored.",
          "It exerts a powerful pull on our behaviour.",
          "It only matters for athletes.",
          "It has little effect on our choices."
         ],
         "answer": 1
        },
        {
         "num": 54,
         "q": "What strategy do experts recommend for building habits?",
         "options": [
          "Relying purely on motivation.",
          "Changing everything at once.",
          "Setting the most ambitious goals possible.",
          "Starting absurdly small and building consistency."
         ],
         "answer": 3
        },
        {
         "num": 55,
         "q": "What does the researcher's quotation mainly suggest?",
         "options": [
          "Willpower is unlimited.",
          "Goals matter more than systems.",
          "Outcomes are determined by the systems we build.",
          "Motivation is the key to success."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "translation": {
    "time": 1800,
    "score": 106.5,
    "source": "2024年12月六级真题 真实题目",
    "kind": "translation",
    "directions": "Translate the passage from Chinese into English.",
    "text": "遨游太空历来是中华民族的梦想。2003 年，神舟五号飞船发射成功，杨利伟成为第一个飞入太空的中国宇航员。2008 年，神舟七号升空，翟志刚成为中国历史上首位进行太空行走的宇航员。近年来，中国航天进入创新发展“快车道”，太空基础设施建设稳步推进，中国空间站于 2022 年全面建成。中国航天事业的迅速发展在中华民族的历史上写下了辉煌一页，也为人类文明进步做出了巨大贡献。未来，中国探索太空的脚步将迈得更稳、更远。",
    "reference": "Travelling in space has long been a dream of the Chinese nation. In 2003, the Shenzhou V spacecraft was launched successfully, and Yang Liwei became the first Chinese astronaut to enter space. In 2008, Shenzhou VII was launched, and Zhai Zhigang became the first Chinese astronaut to conduct a spacewalk in history. In recent years, China's aerospace industry has entered a fast lane of innovative development, with steady progress in space infrastructure construction, and the Chinese space station was fully completed in 2022. The rapid development of China's aerospace industry has written a glorious chapter in the history of the Chinese nation and made great contributions to the progress of human civilization. In the future, China's steps in exploring space will become steadier and go farther.",
    "points": [
     "遨游太空 → travelling in space",
     "宇航员 → astronaut",
     "太空行走 → spacewalk",
     "快车道 → a fast lane",
     "空间站 → space station",
     "人类文明进步 → the progress of human civilization",
     "迈得更稳、更远 → become steadier and go farther"
    ]
   }
  },
  {
   "id": 7,
   "name": "第七套",
   "theme": "竹文化 · 民族品格",
   "meta": {
    "title": "大学英语六级模拟考试（第七套）",
    "subtitle": "CET-6 Simulated Test · Paper 7",
    "totalTime": 7800,
    "fullScore": 710
   },
   "writing": {
    "time": 1800,
    "score": 106.5,
    "directions": "For this part, you are allowed 30 minutes to write an essay that begins with the sentence \"Nowadays, traditional cultural symbols are being reinterpreted to inspire modern values and national identity.\" You can make comments, cite examples or use your personal experiences. You should write at least 150 words but no more than 200 words.",
    "minWords": 150,
    "maxWords": 200,
    "model": "Nowadays, traditional cultural symbols are being reinterpreted to inspire modern values and national identity. This trend reflects broader social changes that deserve careful discussion.\n\nOn the one hand, the development brings tangible benefits to individuals and society, offering new opportunities for growth and cooperation. On the other hand, it also poses challenges that require thoughtful policies and responsible behaviour from all of us.\n\nFrom my perspective, what matters most is how we respond. By staying informed, adapting with an open mind, and acting with long-term vision, we can turn this trend into lasting progress rather than short-lived excitement.",
    "rubric": [
     "切题：围绕“年轻人重拾传统文化兴趣”，照抄给定首句",
     "结构：观点 + 原因分析 + 个人评价结论",
     "举例：汉服 / 诗词大会 / 短视频等具体现象",
     "语言：cultural revival / sense of identity / heritage 等表达",
     "字数：150–200 词",
     "连接：First / Second / In my opinion"
    ]
   },
   "listening": {
    "time": 1500,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 长对话",
     "directions": "You will hear two long conversations. Click ▶ to play, then choose the best answer.",
     "conversations": [
      {
       "id": "p7c1",
       "script": "W: Excuse me, is this the information desk for the City History Museum?\nM: Yes, it is. How can I help you today?\nW: I'm a university student researching local architecture. I was hoping to see the exhibition on ancient buildings, but I heard it might be closed.\nM: You're in luck. The main exhibition is open, though the east wing is under renovation until next month. The section on traditional wooden structures is actually our most popular display.\nW: That's exactly what I need. Is photography allowed? I'd like to take some pictures for my project.\nM: Photography is permitted in most areas, but flash is prohibited to protect the delicate models. There's also a free guided tour starting at two o'clock if you're interested.\nW: A guided tour would be wonderful. Do I need to book in advance?\nM: For individuals, no booking is required. Just gather near the central hall a few minutes before two. The guide today is one of our senior curators, so you'll get plenty of expert detail.\nW: Perfect. One more thing — is there a student discount on the entrance fee?\nM: Absolutely. With a valid student card, you pay half price. Just show it at the ticket counter over there.",
       "questions": [
        {
         "q": "Why has the woman come to the museum?",
         "options": [
          "To apply for a job.",
          "To research local architecture.",
          "To meet a friend.",
          "To attend a lecture."
         ],
         "answer": 1
        },
        {
         "q": "What does the man say about the east wing?",
         "options": [
          "It is permanently closed.",
          "It is the most popular display.",
          "It is open only to students.",
          "It is under renovation until next month."
         ],
         "answer": 3
        },
        {
         "q": "What rule about photography does the man mention?",
         "options": [
          "Photos cost extra.",
          "Flash is prohibited.",
          "Only curators may take photos.",
          "Photography is completely banned."
         ],
         "answer": 1
        },
        {
         "q": "How can the woman get a discount?",
         "options": [
          "By joining the guided tour.",
          "By booking online.",
          "By coming after two o'clock.",
          "By showing a valid student card."
         ],
         "answer": 3
        }
       ]
      },
      {
       "id": "p7c2",
       "script": "M: Sarah, I noticed you've started bringing your lunch to work every day. Trying to save money?\nW: Partly, but it's more about health, actually. I read a study last month that linked frequent takeout meals to higher stress levels, and it really made me think.\nM: Higher stress? I thought takeout just made you gain weight.\nW: That's what surprised me too. Apparently it's not only the calories. The researchers found that the lack of routine and the unpredictability of restaurant food can subtly increase anxiety over time.\nM: Huh. So cooking your own meals gives you a sense of control?\nW: Exactly. Planning and preparing food turns out to be a calming ritual for many people. Plus, I know exactly what goes into my meals.\nM: I have to admit, your lunches look much fresher than the greasy noodles I order. Maybe I should give it a try.\nW: You should. Start small — just two days a week. That's how I began. Now I genuinely look forward to my lunch break instead of feeling sluggish afterwards.\nM: Alright, you've convinced me. Could you share a few simple recipes?\nW: Of course. I'll send you my favourites tonight. They take fifteen minutes at most.",
       "questions": [
        {
         "q": "Why has the woman started bringing her own lunch?",
         "options": [
          "Mainly to save money.",
          "Because the canteen closed.",
          "Mainly for health reasons.",
          "To impress her colleagues."
         ],
         "answer": 2
        },
        {
         "q": "What surprising link did the study reveal?",
         "options": [
          "Cooking and weight gain.",
          "Exercise and anxiety.",
          "Sleep and appetite.",
          "Takeout meals and higher stress levels."
         ],
         "answer": 3
        },
        {
         "q": "According to the woman, why is cooking calming?",
         "options": [
          "It gives a sense of control and routine.",
          "It requires no skill.",
          "It is very cheap.",
          "It impresses others."
         ],
         "answer": 0
        },
        {
         "q": "What does the woman suggest the man do?",
         "options": [
          "Order greasy noodles.",
          "Skip lunch entirely.",
          "Eat out more often.",
          "Start small with two days a week."
         ],
         "answer": 3
        }
       ]
      }
     ]
    },
    "sectionB": {
     "title": "Section B —— 短文/讲座",
     "directions": "You will hear a passage followed by questions. Click ▶ to play, then choose the best answer.",
     "passages": [
      {
       "id": "p7b1",
       "script": "Most of us believe we make decisions based on careful reasoning. In reality, however, much of our behaviour is shaped by tiny details in our environment that we barely notice. This is the central insight of a field known as behavioural science.\nConsider a famous example from the Netherlands. At one airport, cleaning costs in the men's restrooms were extremely high. Then someone had a clever idea: they printed the image of a small fly near the centre of each urinal. Suddenly, men had something to aim at, and spillage dropped by around eighty percent. No rules, no signs, no punishment — just a tiny image that quietly changed behaviour.\nThis approach is often called a \"nudge\". A nudge is any small feature of the environment that gently steers people toward better choices without forbidding any options or changing economic incentives. Placing fruit at eye level in a cafeteria is a nudge; banning junk food is not.\nGovernments around the world have taken notice. Many have set up dedicated teams to apply these insights to public policy, from encouraging people to save for retirement to increasing tax payment rates. By simply changing the wording of a letter, one team helped collect millions in overdue taxes.\nCritics, however, raise an important question: is it ethical to influence people without their awareness? Supporters reply that the environment always influences us anyway, so we might as well design it to promote well-being. The debate is far from settled, but one thing is certain: the smallest details often have the largest effects.",
       "questions": [
        {
         "q": "What is the central insight of behavioural science mentioned?",
         "options": [
          "People always reason carefully.",
          "Rules are the best way to change behaviour.",
          "Tiny environmental details shape our behaviour.",
          "Decisions are purely economic."
         ],
         "answer": 2
        },
        {
         "q": "What did the image of a fly achieve at the airport?",
         "options": [
          "It reduced spillage by about eighty percent.",
          "It was quickly removed.",
          "It increased cleaning costs.",
          "It made people laugh."
         ],
         "answer": 0
        },
        {
         "q": "Which of the following is described as a 'nudge'?",
         "options": [
          "Banning junk food.",
          "Forbidding smoking.",
          "Placing fruit at eye level.",
          "Charging higher taxes."
         ],
         "answer": 2
        },
        {
         "q": "What ethical question do critics raise?",
         "options": [
          "Whether nudges cost too much.",
          "Whether governments work too slowly.",
          "Whether it is ethical to influence people without their awareness.",
          "Whether airports are clean enough."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "reading": {
    "time": 2400,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 选词填空（Word Bank）",
     "directions": "Select one word for each blank from the word bank. You may not use any word more than once.",
     "passage": "Sleep is something we all do, yet it remains one of the most 26 functions of the human body. For centuries, scientists 27 it as a passive state in which the brain simply shut down. Modern research, however, has completely 28 this view. Far from being idle, the sleeping brain is remarkably 29 , consolidating memories and clearing out harmful waste products.\n\nThe consequences of poor sleep are 30 . Studies have repeatedly linked chronic sleep deprivation to weakened immunity, impaired judgement, and a 31 risk of serious illness. Despite this, many people continue to treat sleep as 32 , sacrificing it for work or entertainment.\n\nExperts 33 that adults aim for seven to nine hours per night. They also recommend 34 habits such as avoiding screens before bed and keeping a regular schedule. Such simple measures, they argue, can 35 improve both physical and mental health.",
     "bank": [
      {
       "l": "A",
       "w": "optional"
      },
      {
       "l": "B",
       "w": "regarded"
      },
      {
       "l": "C",
       "w": "reward"
      },
      {
       "l": "D",
       "w": "healthy"
      },
      {
       "l": "E",
       "w": "ignore"
      },
      {
       "l": "F",
       "w": "dramatically"
      },
      {
       "l": "G",
       "w": "recommend"
      },
      {
       "l": "H",
       "w": "severe"
      },
      {
       "l": "I",
       "w": "destroyed"
      },
      {
       "l": "J",
       "w": "mysterious"
      },
      {
       "l": "K",
       "w": "overturned"
      },
      {
       "l": "L",
       "w": "active"
      },
      {
       "l": "M",
       "w": "heightened"
      },
      {
       "l": "N",
       "w": "occasionally"
      },
      {
       "l": "O",
       "w": "nearby"
      }
     ],
     "blanks": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35
     ],
     "answers": {
      "26": "J",
      "27": "B",
      "28": "K",
      "29": "L",
      "30": "H",
      "31": "M",
      "32": "A",
      "33": "G",
      "34": "D",
      "35": "F"
     }
    },
    "sectionC": {
     "title": "Section C —— 仔细阅读（Reading in Depth）",
     "directions": "There is a passage followed by questions. Choose the best answer.",
     "passages": [
      {
       "id": "p7r1",
       "source": "CET6 风格 自编篇章",
       "text": "Every year, millions of people make New Year's resolutions, and every year the vast majority abandon them within weeks. Gym memberships spike in January and collapse by February. Why are good intentions so difficult to sustain? Psychologists who study habit formation offer a surprising answer: the problem is rarely a lack of willpower. Instead, it is a misunderstanding of how habits actually work.\n\nMost people try to change their behaviour by focusing on outcomes — losing weight, saving money, reading more. But research suggests that focusing on identity is far more powerful. Rather than aiming to \"run a marathon\", it is more effective to think of oneself as \"a runner\". When a behaviour becomes part of who we are, it no longer requires constant willpower; it simply becomes what we do.\n\nEqually important is the role of the environment. We like to believe we are in control of our choices, but in fact our surroundings exert a powerful pull. A person trying to eat healthily will struggle if their kitchen is full of snacks, no matter how determined they are. The most successful habit-changers, therefore, do not rely on motivation alone. They redesign their environment to make good habits easy and bad habits difficult.\n\nFinally, experts emphasise the power of small steps. Ambitious goals feel inspiring but often prove overwhelming. A more reliable strategy is to start almost absurdly small — reading a single page, doing two push-ups — and let the habit grow naturally. The aim is not immediate transformation but consistency. As one researcher puts it, \"You do not rise to the level of your goals; you fall to the level of your systems.\"\n\nThis insight reframes the entire challenge of self-improvement. The question is no longer \"How can I find the motivation?\" but \"How can I build a system that makes the desired behaviour almost inevitable?\" For those who have struggled with broken resolutions, the message is both humbling and hopeful: lasting change comes not from heroic effort, but from intelligent design.",
       "questions": [
        {
         "num": 51,
         "q": "What surprising answer do psychologists offer about failed resolutions?",
         "options": [
          "People misunderstand how habits work.",
          "People dislike exercise.",
          "People simply lack willpower.",
          "People set goals too late in the year."
         ],
         "answer": 0
        },
        {
         "num": 52,
         "q": "Why is focusing on identity considered more powerful?",
         "options": [
          "It impresses other people.",
          "It costs less money.",
          "The behaviour no longer requires constant willpower.",
          "It guarantees instant results."
         ],
         "answer": 2
        },
        {
         "num": 53,
         "q": "What does the passage say about the environment?",
         "options": [
          "It should be ignored.",
          "It exerts a powerful pull on our behaviour.",
          "It only matters for athletes.",
          "It has little effect on our choices."
         ],
         "answer": 1
        },
        {
         "num": 54,
         "q": "What strategy do experts recommend for building habits?",
         "options": [
          "Relying purely on motivation.",
          "Changing everything at once.",
          "Setting the most ambitious goals possible.",
          "Starting absurdly small and building consistency."
         ],
         "answer": 3
        },
        {
         "num": 55,
         "q": "What does the researcher's quotation mainly suggest?",
         "options": [
          "Willpower is unlimited.",
          "Goals matter more than systems.",
          "Outcomes are determined by the systems we build.",
          "Motivation is the key to success."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "translation": {
    "time": 1800,
    "score": 106.5,
    "source": "2024年6月六级真题 真实题目",
    "kind": "translation",
    "directions": "Translate the passage from Chinese into English.",
    "text": "中国盛产竹子，是最早开发利用竹资源的国家。竹子在中国分布广泛，品种丰富。竹子实用性强， 用于生产和生活的许多方面，如筷子、桌椅的制作和桥梁、房屋的建造。中国人爱竹，自古以来就有无 数文人以竹为主题，创作了绚丽多彩的文学和绘画作品。竹子主干(stem) 笔直，象征正直的品格。竹 子具有强大的生命力和适应能力，无论环境多么恶劣，都能够顽强生存，因而寓意坚韧不拔的精神。几 千年来，竹子一直被视为中华民族品格的象征。",
    "reference": "China abounds in bamboo and is the earliest country to develop and utilize bamboo resources. Bamboo is widely distributed in China and rich in varieties. It is highly practical and used in many aspects of production and daily life, such as making chopsticks, tables and chairs, as well as building bridges and houses. Chinese people love bamboo. Since ancient times, countless men of letters have created splendid literary and artistic works with bamboo as the theme. The straight stem of bamboo symbolizes an upright character. Bamboo has strong vitality and adaptability and can survive tenaciously no matter how harsh the environment is, thus implying a spirit of perseverance. For thousands of years, bamboo has been regarded as a symbol of the character of the Chinese nation.",
    "points": [
     "盛产竹子 → abounds in bamboo",
     "分布广泛 → widely distributed",
     "实用性强 → highly practical",
     "文人 → men of letters",
     "象征正直 → symbolize an upright character",
     "坚韧不拔 → perseverance",
     "民族品格 → the character of the Chinese nation"
    ]
   }
  },
  {
   "id": 8,
   "name": "第八套",
   "theme": "社会民生 · 养老模式",
   "meta": {
    "title": "大学英语六级模拟考试（第八套）",
    "subtitle": "CET-6 Simulated Test · Paper 8",
    "totalTime": 7800,
    "fullScore": 710
   },
   "writing": {
    "time": 1800,
    "score": 106.5,
    "directions": "For this part, you are allowed 30 minutes to write an essay that begins with the sentence \"Nowadays, addressing the challenges of an aging society has become a pressing issue for many countries.\" You can make comments, cite examples or use your personal experiences. You should write at least 150 words but no more than 200 words.",
    "minWords": 150,
    "maxWords": 200,
    "model": "Nowadays, addressing the challenges of an aging society has become a pressing issue for many countries. This trend reflects broader social changes that deserve careful discussion.\n\nOn the one hand, the development brings tangible benefits to individuals and society, offering new opportunities for growth and cooperation. On the other hand, it also poses challenges that require thoughtful policies and responsible behaviour from all of us.\n\nFrom my perspective, what matters most is how we respond. By staying informed, adapting with an open mind, and acting with long-term vision, we can turn this trend into lasting progress rather than short-lived excitement.",
    "rubric": [
     "切题：围绕“年轻人重拾传统文化兴趣”，照抄给定首句",
     "结构：观点 + 原因分析 + 个人评价结论",
     "举例：汉服 / 诗词大会 / 短视频等具体现象",
     "语言：cultural revival / sense of identity / heritage 等表达",
     "字数：150–200 词",
     "连接：First / Second / In my opinion"
    ]
   },
   "listening": {
    "time": 1500,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 长对话",
     "directions": "You will hear two long conversations. Click ▶ to play, then choose the best answer.",
     "conversations": [
      {
       "id": "p8c1",
       "script": "W: Excuse me, is this the information desk for the City History Museum?\nM: Yes, it is. How can I help you today?\nW: I'm a university student researching local architecture. I was hoping to see the exhibition on ancient buildings, but I heard it might be closed.\nM: You're in luck. The main exhibition is open, though the east wing is under renovation until next month. The section on traditional wooden structures is actually our most popular display.\nW: That's exactly what I need. Is photography allowed? I'd like to take some pictures for my project.\nM: Photography is permitted in most areas, but flash is prohibited to protect the delicate models. There's also a free guided tour starting at two o'clock if you're interested.\nW: A guided tour would be wonderful. Do I need to book in advance?\nM: For individuals, no booking is required. Just gather near the central hall a few minutes before two. The guide today is one of our senior curators, so you'll get plenty of expert detail.\nW: Perfect. One more thing — is there a student discount on the entrance fee?\nM: Absolutely. With a valid student card, you pay half price. Just show it at the ticket counter over there.",
       "questions": [
        {
         "q": "Why has the woman come to the museum?",
         "options": [
          "To apply for a job.",
          "To research local architecture.",
          "To meet a friend.",
          "To attend a lecture."
         ],
         "answer": 1
        },
        {
         "q": "What does the man say about the east wing?",
         "options": [
          "It is permanently closed.",
          "It is the most popular display.",
          "It is open only to students.",
          "It is under renovation until next month."
         ],
         "answer": 3
        },
        {
         "q": "What rule about photography does the man mention?",
         "options": [
          "Photos cost extra.",
          "Flash is prohibited.",
          "Only curators may take photos.",
          "Photography is completely banned."
         ],
         "answer": 1
        },
        {
         "q": "How can the woman get a discount?",
         "options": [
          "By joining the guided tour.",
          "By booking online.",
          "By coming after two o'clock.",
          "By showing a valid student card."
         ],
         "answer": 3
        }
       ]
      },
      {
       "id": "p8c2",
       "script": "M: Sarah, I noticed you've started bringing your lunch to work every day. Trying to save money?\nW: Partly, but it's more about health, actually. I read a study last month that linked frequent takeout meals to higher stress levels, and it really made me think.\nM: Higher stress? I thought takeout just made you gain weight.\nW: That's what surprised me too. Apparently it's not only the calories. The researchers found that the lack of routine and the unpredictability of restaurant food can subtly increase anxiety over time.\nM: Huh. So cooking your own meals gives you a sense of control?\nW: Exactly. Planning and preparing food turns out to be a calming ritual for many people. Plus, I know exactly what goes into my meals.\nM: I have to admit, your lunches look much fresher than the greasy noodles I order. Maybe I should give it a try.\nW: You should. Start small — just two days a week. That's how I began. Now I genuinely look forward to my lunch break instead of feeling sluggish afterwards.\nM: Alright, you've convinced me. Could you share a few simple recipes?\nW: Of course. I'll send you my favourites tonight. They take fifteen minutes at most.",
       "questions": [
        {
         "q": "Why has the woman started bringing her own lunch?",
         "options": [
          "Mainly to save money.",
          "Because the canteen closed.",
          "Mainly for health reasons.",
          "To impress her colleagues."
         ],
         "answer": 2
        },
        {
         "q": "What surprising link did the study reveal?",
         "options": [
          "Cooking and weight gain.",
          "Exercise and anxiety.",
          "Sleep and appetite.",
          "Takeout meals and higher stress levels."
         ],
         "answer": 3
        },
        {
         "q": "According to the woman, why is cooking calming?",
         "options": [
          "It gives a sense of control and routine.",
          "It requires no skill.",
          "It is very cheap.",
          "It impresses others."
         ],
         "answer": 0
        },
        {
         "q": "What does the woman suggest the man do?",
         "options": [
          "Order greasy noodles.",
          "Skip lunch entirely.",
          "Eat out more often.",
          "Start small with two days a week."
         ],
         "answer": 3
        }
       ]
      }
     ]
    },
    "sectionB": {
     "title": "Section B —— 短文/讲座",
     "directions": "You will hear a passage followed by questions. Click ▶ to play, then choose the best answer.",
     "passages": [
      {
       "id": "p8b1",
       "script": "Most of us believe we make decisions based on careful reasoning. In reality, however, much of our behaviour is shaped by tiny details in our environment that we barely notice. This is the central insight of a field known as behavioural science.\nConsider a famous example from the Netherlands. At one airport, cleaning costs in the men's restrooms were extremely high. Then someone had a clever idea: they printed the image of a small fly near the centre of each urinal. Suddenly, men had something to aim at, and spillage dropped by around eighty percent. No rules, no signs, no punishment — just a tiny image that quietly changed behaviour.\nThis approach is often called a \"nudge\". A nudge is any small feature of the environment that gently steers people toward better choices without forbidding any options or changing economic incentives. Placing fruit at eye level in a cafeteria is a nudge; banning junk food is not.\nGovernments around the world have taken notice. Many have set up dedicated teams to apply these insights to public policy, from encouraging people to save for retirement to increasing tax payment rates. By simply changing the wording of a letter, one team helped collect millions in overdue taxes.\nCritics, however, raise an important question: is it ethical to influence people without their awareness? Supporters reply that the environment always influences us anyway, so we might as well design it to promote well-being. The debate is far from settled, but one thing is certain: the smallest details often have the largest effects.",
       "questions": [
        {
         "q": "What is the central insight of behavioural science mentioned?",
         "options": [
          "People always reason carefully.",
          "Rules are the best way to change behaviour.",
          "Tiny environmental details shape our behaviour.",
          "Decisions are purely economic."
         ],
         "answer": 2
        },
        {
         "q": "What did the image of a fly achieve at the airport?",
         "options": [
          "It reduced spillage by about eighty percent.",
          "It was quickly removed.",
          "It increased cleaning costs.",
          "It made people laugh."
         ],
         "answer": 0
        },
        {
         "q": "Which of the following is described as a 'nudge'?",
         "options": [
          "Banning junk food.",
          "Forbidding smoking.",
          "Placing fruit at eye level.",
          "Charging higher taxes."
         ],
         "answer": 2
        },
        {
         "q": "What ethical question do critics raise?",
         "options": [
          "Whether nudges cost too much.",
          "Whether governments work too slowly.",
          "Whether it is ethical to influence people without their awareness.",
          "Whether airports are clean enough."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "reading": {
    "time": 2400,
    "score": 248.5,
    "sectionA": {
     "title": "Section A —— 选词填空（Word Bank）",
     "directions": "Select one word for each blank from the word bank. You may not use any word more than once.",
     "passage": "Sleep is something we all do, yet it remains one of the most 26 functions of the human body. For centuries, scientists 27 it as a passive state in which the brain simply shut down. Modern research, however, has completely 28 this view. Far from being idle, the sleeping brain is remarkably 29 , consolidating memories and clearing out harmful waste products.\n\nThe consequences of poor sleep are 30 . Studies have repeatedly linked chronic sleep deprivation to weakened immunity, impaired judgement, and a 31 risk of serious illness. Despite this, many people continue to treat sleep as 32 , sacrificing it for work or entertainment.\n\nExperts 33 that adults aim for seven to nine hours per night. They also recommend 34 habits such as avoiding screens before bed and keeping a regular schedule. Such simple measures, they argue, can 35 improve both physical and mental health.",
     "bank": [
      {
       "l": "A",
       "w": "optional"
      },
      {
       "l": "B",
       "w": "regarded"
      },
      {
       "l": "C",
       "w": "reward"
      },
      {
       "l": "D",
       "w": "healthy"
      },
      {
       "l": "E",
       "w": "ignore"
      },
      {
       "l": "F",
       "w": "dramatically"
      },
      {
       "l": "G",
       "w": "recommend"
      },
      {
       "l": "H",
       "w": "severe"
      },
      {
       "l": "I",
       "w": "destroyed"
      },
      {
       "l": "J",
       "w": "mysterious"
      },
      {
       "l": "K",
       "w": "overturned"
      },
      {
       "l": "L",
       "w": "active"
      },
      {
       "l": "M",
       "w": "heightened"
      },
      {
       "l": "N",
       "w": "occasionally"
      },
      {
       "l": "O",
       "w": "nearby"
      }
     ],
     "blanks": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35
     ],
     "answers": {
      "26": "J",
      "27": "B",
      "28": "K",
      "29": "L",
      "30": "H",
      "31": "M",
      "32": "A",
      "33": "G",
      "34": "D",
      "35": "F"
     }
    },
    "sectionC": {
     "title": "Section C —— 仔细阅读（Reading in Depth）",
     "directions": "There is a passage followed by questions. Choose the best answer.",
     "passages": [
      {
       "id": "p8r1",
       "source": "CET6 风格 自编篇章",
       "text": "Every year, millions of people make New Year's resolutions, and every year the vast majority abandon them within weeks. Gym memberships spike in January and collapse by February. Why are good intentions so difficult to sustain? Psychologists who study habit formation offer a surprising answer: the problem is rarely a lack of willpower. Instead, it is a misunderstanding of how habits actually work.\n\nMost people try to change their behaviour by focusing on outcomes — losing weight, saving money, reading more. But research suggests that focusing on identity is far more powerful. Rather than aiming to \"run a marathon\", it is more effective to think of oneself as \"a runner\". When a behaviour becomes part of who we are, it no longer requires constant willpower; it simply becomes what we do.\n\nEqually important is the role of the environment. We like to believe we are in control of our choices, but in fact our surroundings exert a powerful pull. A person trying to eat healthily will struggle if their kitchen is full of snacks, no matter how determined they are. The most successful habit-changers, therefore, do not rely on motivation alone. They redesign their environment to make good habits easy and bad habits difficult.\n\nFinally, experts emphasise the power of small steps. Ambitious goals feel inspiring but often prove overwhelming. A more reliable strategy is to start almost absurdly small — reading a single page, doing two push-ups — and let the habit grow naturally. The aim is not immediate transformation but consistency. As one researcher puts it, \"You do not rise to the level of your goals; you fall to the level of your systems.\"\n\nThis insight reframes the entire challenge of self-improvement. The question is no longer \"How can I find the motivation?\" but \"How can I build a system that makes the desired behaviour almost inevitable?\" For those who have struggled with broken resolutions, the message is both humbling and hopeful: lasting change comes not from heroic effort, but from intelligent design.",
       "questions": [
        {
         "num": 51,
         "q": "What surprising answer do psychologists offer about failed resolutions?",
         "options": [
          "People misunderstand how habits work.",
          "People dislike exercise.",
          "People simply lack willpower.",
          "People set goals too late in the year."
         ],
         "answer": 0
        },
        {
         "num": 52,
         "q": "Why is focusing on identity considered more powerful?",
         "options": [
          "It impresses other people.",
          "It costs less money.",
          "The behaviour no longer requires constant willpower.",
          "It guarantees instant results."
         ],
         "answer": 2
        },
        {
         "num": 53,
         "q": "What does the passage say about the environment?",
         "options": [
          "It should be ignored.",
          "It exerts a powerful pull on our behaviour.",
          "It only matters for athletes.",
          "It has little effect on our choices."
         ],
         "answer": 1
        },
        {
         "num": 54,
         "q": "What strategy do experts recommend for building habits?",
         "options": [
          "Relying purely on motivation.",
          "Changing everything at once.",
          "Setting the most ambitious goals possible.",
          "Starting absurdly small and building consistency."
         ],
         "answer": 3
        },
        {
         "num": 55,
         "q": "What does the researcher's quotation mainly suggest?",
         "options": [
          "Willpower is unlimited.",
          "Goals matter more than systems.",
          "Outcomes are determined by the systems we build.",
          "Motivation is the key to success."
         ],
         "answer": 2
        }
       ]
      }
     ]
    }
   },
   "translation": {
    "time": 1800,
    "score": 106.5,
    "source": "2023年12月六级真题 真实题目",
    "kind": "translation",
    "directions": "Translate the passage from Chinese into English.",
    "text": "在中国，随着老龄化社会的到来，养老受到普通关注。人们谈论最多的是应当采取什么样的养老模式。多数人认为，养老模式需要多元化。可以通过政府引导和社会参吾与，建立更多更好的养老服务机构，改进社区服务中心，鼓勋居家自助养老，还可以推行家庭养老与社会养老相结合的模式。随着政府和社会对养老服务事业投入的持续增加，养老设施特不断升级，服务质量逐步改进，老年人的生活将会更加方便舒适、健康快乐。",
    "reference": "In China, with the arrival of an aging society, elderly care has received widespread attention. What people talk about most is what kind of elderly care model should be adopted. Most people believe that the elderly care model needs to be diversified. Through government guidance and social participation, more and better elderly care service institutions can be established, community service centres can be improved, home-based self-care for the elderly can be encouraged, and a model combining family care with social care can be promoted. As the government and society continue to increase investment in elderly care services, elderly care facilities are constantly upgraded and service quality is gradually improved. The lives of the elderly will become more convenient, comfortable, healthy and happy.",
    "points": [
     "老龄化社会 → an aging society",
     "养老模式 → elderly care model",
     "多元化 → diversified",
     "政府引导 → government guidance",
     "居家养老 → home-based care",
     "社区服务中心 → community service centres",
     "服务质量 → service quality"
    ]
   }
  }
 ];

var EXAM = EXAMS[0];
