export type Lang = "en" | "ja";

type Dict = {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    beyond: string;
    contact: string;
    talk: string;
  };
  hero: {
    status: string;
    statement: string;
    viewWork: string;
    download: string;
    connect: string;
    tags: string[];
    cgpa: string;
    accuracy: string;
    builds: string;
  };
  about: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    p1a: string;
    p1strong: string;
    p1b: string;
    p2a: string;
    p2strong: string;
    p2b: string;
    p3: string;
    statCgpa: string;
    statAccuracy: string;
    statEfficiency: string;
    statPlanes: string;
    languagesLabel: string;
    jlptLabel: string;
    jlptDone: string;
    jlptTarget: string;
  };
  skills: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    sub: string;
  };
  experience: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    role: string;
    org: string;
    meta: string;
    accuracyLabel: string;
    efficiencyLabel: string;
    bullets: string[];
    pipeline: string[];
  };
  projects: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    sub: string;
    github: string;
    detailsShow: string;
    detailsHide: string;
    problem: string;
    approach: string;
    impact: string;
  };
  education: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
  };
  certs: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
  };
  achievements: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
  };
  beyond: {
    eyebrow: string;
    title: string;
    quote: string;
    body: string;
    caption: string;
  };
  contact: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    sub: string;
    copy: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendIdle: string;
    sendBusy: string;
    formNote: string;
    sentToast: string;
  };
  footer: string;
};

export const T: Record<Lang, Dict> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      beyond: "Beyond",
      contact: "Contact",
      talk: "Let's talk",
    },
    hero: {
      status: "Software Developer / 2026 Graduate / Open to opportunities",
      statement:
        "Building intelligent, data driven systems that turn complex problems into practical engineering solutions across computer vision, NLP, and the full stack that ships them.",
      viewWork: "View my work",
      download: "Download resume",
      connect: "Let's connect",
      tags: ["AI Engineering", "Computer Vision", "NLP", "Full Stack"],
      cgpa: "CGPA . B.E. CS (AI&ML)",
      accuracy: "extraction accuracy up",
      builds: "independent builds shipped",
    },
    about: {
      eyebrow: "About",
      titleA: "A systems thinker who ships",
      titleEm: "across",
      titleB: "the full AI stack.",
      p1a: "I'm a Computer Science engineer graduating in 2026, specializing in",
      p1strong: "Artificial Intelligence and Machine Learning",
      p1b:
        ". My work sits at the intersection of computer vision, NLP, and the backend systems that turn model output into something a real product can use.",
      p2a: "Most recently, I spent a semester inside",
      p2strong: "Quest Global's Energy Vertical",
      p2b:
        ", building an AI/NLP pipeline for ExxonMobil's engineering documents, pairing YOLO and OCR for extraction with GPT-4o for structuring unstructured text, then wiring the whole thing into a production FastAPI service.",
      p3:
        "Outside of internships, I build complete projects on my own: a hybrid LSTM plus ARIMA stock recommender, a real time auction platform, an enterprise task management system, because I'd rather understand a system by building it than by reading about it.",
      statCgpa: "CGPA in B.E. Computer Science (AI & ML)",
      statAccuracy: "Improvement in extraction accuracy at Quest Global",
      statEfficiency: "Increase in workflow efficiency delivered",
      statPlanes: "RC aircraft designed, built and flown from scratch",
      languagesLabel: "Languages",
      jlptLabel: "Japanese proficiency (JLPT)",
      jlptDone: "Passed",
      jlptTarget: "Target",
    },
    skills: {
      eyebrow: "Engineering profile",
      titleA: "What I actually work",
      titleEm: "with",
      titleB: ".",
      sub: "Hover any chip to see how it's actually been used, not just a logo wall.",
    },
    experience: {
      eyebrow: "Experience",
      titleA: "Where I got real world",
      titleEm: "experience",
      titleB: ".",
      role: "AI & ML Intern",
      org: "Quest Global, Bangalore",
      meta: "Energy Vertical . ExxonMobil AI Team . Oct 2025 to Mar 2026",
      accuracyLabel: "Improvement in data extraction accuracy",
      efficiencyLabel: "Increase in workflow efficiency",
      bullets: [
        "Developed an AI/NLP based data extraction pipeline for client forms and P&ID engineering diagrams.",
        "Used YOLO and OCR for computer vision based extraction.",
        "Applied GPT-4o and Python to process, tag, and structure unstructured text.",
        "Automated preprocessing, validation, and storage using Python and SQLite.",
        "Worked with FastAPI and backend integration.",
        "Integrated AI outputs into frontend interfaces using TypeScript.",
        "Used Azure DevOps for version control and production deployment.",
      ],
      pipeline: ["Raw Documents", "Computer Vision", "OCR", "NLP / LLM", "Validation", "Structured Data"],
    },
    projects: {
      eyebrow: "Projects",
      titleA: "Things I've built",
      titleEm: "end to end",
      titleB: ".",
      sub: "Independent builds, from model to interface.",
      github: "View on GitHub",
      detailsShow: "View Details",
      detailsHide: "Hide Details",
      problem: "The problem",
      approach: "The approach",
      impact: "Impact",
    },
    education: {
      eyebrow: "Education",
      titleA: "Academic",
      titleEm: "foundation",
      titleB: ".",
    },
    certs: {
      eyebrow: "Certifications",
      titleA: "Continuous learning,",
      titleEm: "on record",
      titleB: ".",
    },
    achievements: {
      eyebrow: "Achievements",
      titleA: "Competitions and",
      titleEm: "challenges",
      titleB: ".",
    },
    beyond: {
      eyebrow: "Beyond code",
      title: "Engineering beyond the screen.",
      quote:
        "I have built and successfully flown four fully functional RC aircraft made from balsa wood and powered by IC engines.",
      body:
        "Aeromodelling taught me what a debugger can't: patience with physical systems, tolerance for repeated failure, and the discipline to test before you trust something with flight. It's the same mindset I bring to shipping AI systems: build, test, break, rebuild.",
      caption: "BALSA WOOD . IC ENGINE . 4 SUCCESSFUL BUILDS",
    },
    contact: {
      eyebrow: "Contact",
      titleA: "Let's build something",
      titleEm: "worth shipping",
      titleB: ".",
      sub: "Open to AI engineering, ML, and full stack roles. Based in Bangalore, happy to talk remote or on site.",
      copy: "Copy",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "What are you building?",
      sendIdle: "Send message",
      sendBusy: "Sending",
      formNote: "Sent straight to my inbox, no email client needed.",
      sentToast: "Message sent. I'll get back to you soon.",
    },
    footer: "Designed and built by Uzair Mohammed . Bangalore, India",
  },

  ja: {
    nav: {
      about: "自己紹介",
      experience: "職務経歴",
      projects: "プロジェクト",
      skills: "スキル",
      education: "学歴",
      beyond: "趣味",
      contact: "連絡先",
      talk: "お問い合わせ",
    },
    hero: {
      status: "ソフトウェア開発者 / 2026年卒業予定 / 転職活動中",
      statement:
        "コンピュータビジョン、自然言語処理、そしてそれらを支えるフルスタックの技術を通じて、複雑な課題を実用的なエンジニアリングへと変えるデータ駆動型システムを構築しています。",
      viewWork: "実績を見る",
      download: "履歴書をダウンロード",
      connect: "お問い合わせ",
      tags: ["AIエンジニアリング", "コンピュータビジョン", "自然言語処理", "フルスタック開発"],
      cgpa: "GPA . 情報工学学士 (AI＆機械学習専攻)",
      accuracy: "抽出精度が向上",
      builds: "個人開発プロジェクトを完成",
    },
    about: {
      eyebrow: "自己紹介",
      titleA: "AIスタック",
      titleEm: "全体",
      titleB: "を横断して開発するシステム思考のエンジニア。",
      p1a: "2026年卒業予定のコンピュータサイエンス専攻の学生で、",
      p1strong: "人工知能と機械学習",
      p1b:
        "を専門としています。コンピュータビジョン、自然言語処理、そしてモデルの出力を実際のプロダクトで使える形にするバックエンドシステムの交差点で活動しています。",
      p2a: "直近では",
      p2strong: "Quest Global社のエネルギー部門",
      p2b:
        "で、エクソンモービル社の技術文書を対象としたAI/自然言語処理パイプラインを開発しました。YOLOとOCRによる抽出と、GPT-4oによる非構造化テキストの構造化を組み合わせ、実運用のFastAPIサービスへと統合しました。",
      p3:
        "インターンシップ以外にも、LSTMとARIMAを組み合わせた株式推奨エンジン、リアルタイムオークションプラットフォーム、企業向けタスク管理システムなど、自分自身で一から作り上げています。読むよりも作ることでシステムを理解したいと考えているからです。",
      statCgpa: "情報工学学士（AI＆機械学習専攻）のGPA",
      statAccuracy: "Quest Global社での抽出精度の改善率",
      statEfficiency: "実現した業務効率の向上率",
      statPlanes: "設計・製作・飛行させたRC飛行機の機数",
      languagesLabel: "言語",
      jlptLabel: "日本語能力（JLPT）",
      jlptDone: "合格済み",
      jlptTarget: "目標",
    },
    skills: {
      eyebrow: "エンジニアリングプロフィール",
      titleA: "実際に使っている",
      titleEm: "技術",
      titleB: "。",
      sub: "各チップにカーソルを合わせると、実際の活用例を確認できます。単なるロゴの羅列ではありません。",
    },
    experience: {
      eyebrow: "職務経歴",
      titleA: "実務経験を積んだ",
      titleEm: "現場",
      titleB: "。",
      role: "AI・機械学習インターン",
      org: "Quest Global（バンガロール）",
      meta: "エネルギー部門 . エクソンモービルAIチーム . 2025年10月から2026年3月",
      accuracyLabel: "データ抽出精度の改善率",
      efficiencyLabel: "業務効率の向上率",
      bullets: [
        "クライアントフォームおよびP&ID技術図面を対象としたAI/自然言語処理ベースのデータ抽出パイプラインを開発。",
        "コンピュータビジョンベースの抽出にYOLOとOCRを活用。",
        "GPT-4oとPythonを用いて非構造化テキストの処理、タグ付け、構造化を実施。",
        "PythonとSQLiteを使い、前処理、検証、保存を自動化。",
        "FastAPIを用いたバックエンド統合を担当。",
        "TypeScriptを用いてAI出力をフロントエンド画面に統合。",
        "Azure DevOpsによるバージョン管理と本番デプロイを実施。",
      ],
      pipeline: ["元データ", "コンピュータビジョン", "OCR", "自然言語処理 / LLM", "検証", "構造化データ"],
    },
    projects: {
      eyebrow: "プロジェクト",
      titleA: "自分の手で",
      titleEm: "最初から最後まで",
      titleB: "作り上げたもの。",
      sub: "モデルの設計からインターフェースまで、すべて個人開発です。",
      github: "GitHubで見る",
      detailsShow: "詳細を見る",
      detailsHide: "詳細を閉じる",
      problem: "課題",
      approach: "アプローチ",
      impact: "成果",
    },
    education: {
      eyebrow: "学歴",
      titleA: "学問的な",
      titleEm: "基盤",
      titleB: "。",
    },
    certs: {
      eyebrow: "認定資格",
      titleA: "継続的な学習の",
      titleEm: "記録",
      titleB: "。",
    },
    achievements: {
      eyebrow: "受賞歴",
      titleA: "コンテストと",
      titleEm: "チャレンジ",
      titleB: "。",
    },
    beyond: {
      eyebrow: "コードの外側で",
      title: "画面の外側にあるものづくり。",
      quote:
        "バルサ材で製作しIC（内燃）エンジンで動く、完全に機能するRC飛行機を4機製作し、飛行に成功しました。",
      body:
        "航空模型製作から学んだのは、デバッガーでは得られないことです。物理システムに対する忍耐力、失敗を繰り返すことへの耐性、そして飛ばす前に検証を尽くす姿勢です。AIシステムを開発する際の姿勢もまったく同じです。作り、試し、壊し、また作り直す。",
      caption: "バルサ材 . IC（内燃）エンジン . 4機製作に成功",
    },
    contact: {
      eyebrow: "連絡先",
      titleA: "一緒に、",
      titleEm: "本当に価値のあるもの",
      titleB: "を作りませんか。",
      sub: "AIエンジニア、機械学習エンジニア、フルスタック職を探しています。拠点はバンガロールですが、リモートでも対面でもお気軽にご相談ください。",
      copy: "コピー",
      namePlaceholder: "お名前",
      emailPlaceholder: "メールアドレス",
      messagePlaceholder: "どのようなご相談ですか？",
      sendIdle: "メッセージを送信",
      sendBusy: "送信中",
      formNote: "メールソフトを使わず、直接私の受信箱に届きます。",
      sentToast: "メッセージを送信しました。追ってご連絡します。",
    },
    footer: "Uzair Mohammed による設計と開発 . インド・バンガロール",
  },
};
