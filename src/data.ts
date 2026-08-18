export const ROLES = [
  { en: "Software Developer", ja: "ソフトウェア開発者" },
  { en: "Machine Learning Engineer", ja: "機械学習エンジニア" },
  { en: "Computer Vision Engineer", ja: "コンピュータビジョンエンジニア" },
  { en: "Full Stack Developer", ja: "フルスタックエンジニア" },
];

export type SkillCategory = {
  id: string;
  label: string;
  labelJa: string;
  items: { name: string; tip: string; tipJa: string }[];
};

export const PROFILE: SkillCategory[] = [
  {
    id: "ai",
    label: "AI",
    labelJa: "AI",
    items: [
      { name: "Machine Learning", tip: "Core to the stock recommendation engine and the Quest Global extraction pipeline.", tipJa: "株式推奨エンジンとQuest Global社の抽出パイプラインの中核技術。" },
      { name: "NLP", tip: "Used GPT-4o + Python to parse and structure unstructured engineering text at Quest Global.", tipJa: "Quest Global社でGPT-4oとPythonを用い、非構造化テキストを解析・構造化。" },
      { name: "Computer Vision", tip: "Paired with OCR to extract data straight from P&ID diagrams and client forms.", tipJa: "OCRと組み合わせ、P&ID図面やクライアントフォームから直接データを抽出。" },
      { name: "YOLO", tip: "Used for object detection during document and diagram data extraction.", tipJa: "文書・図面データ抽出時の物体検出に使用。" },
      { name: "OCR", tip: "Extracted structured fields from scanned engineering forms and diagrams.", tipJa: "スキャンされた技術フォームや図面から構造化フィールドを抽出。" },
      { name: "GPT-4o", tip: "Processed and tagged unstructured text into structured, usable data.", tipJa: "非構造化テキストを処理・タグ付けし、利用可能な構造化データへ変換。" },
    ],
  },
  {
    id: "eng",
    label: "Engineering",
    labelJa: "エンジニアリング",
    items: [
      { name: "Python", tip: "Primary language across ML models, backend services, and automation scripts.", tipJa: "機械学習モデル、バックエンドサービス、自動化スクリプト全般で使用する主要言語。" },
      { name: "Java", tip: "Core language from coursework and DSA problem solving.", tipJa: "授業やデータ構造・アルゴリズム学習で使用した中核言語。" },
      { name: "C", tip: "Foundation from Mastering DSA using C and C++.", tipJa: "C/C++によるデータ構造・アルゴリズム学習の基礎。" },
      { name: "C#", tip: "Built the backend logic for the Enterprise Task Management Platform.", tipJa: "企業向けタスク管理プラットフォームのバックエンドロジックを構築。" },
      { name: "TypeScript", tip: "Integrated AI outputs into frontend interfaces at Quest Global.", tipJa: "Quest Global社でAIの出力をフロントエンド画面に統合。" },
      { name: "Node.js", tip: "Backend runtime for STOCK 5 and the Online Auction Platform.", tipJa: "STOCK 5とオンラインオークションプラットフォームのバックエンド実行環境。" },
      { name: "React.js", tip: "Frontend framework for STOCK 5 and the Online Auction Platform.", tipJa: "STOCK 5とオンラインオークションプラットフォームのフロントエンドフレームワーク。" },
      { name: "FastAPI", tip: "Built backend integration and workflow support at Quest Global.", tipJa: "Quest Global社でバックエンド統合とワークフロー支援を構築。" },
    ],
  },
  {
    id: "data",
    label: "Data",
    labelJa: "データ",
    items: [
      { name: "Pandas", tip: "Data preprocessing for market data in the STOCK 5 recommendation engine.", tipJa: "STOCK 5推奨エンジンにおける市場データの前処理に使用。" },
      { name: "NumPy", tip: "Numerical processing underlying the LSTM + ARIMA forecasting pipeline.", tipJa: "LSTMとARIMAによる予測パイプラインの数値処理基盤。" },
      { name: "SQL", tip: "Structured querying across relational data stores.", tipJa: "リレーショナルデータストア全般での構造化クエリに使用。" },
      { name: "SQLite", tip: "Automated storage and validation layer for the Quest Global extraction pipeline.", tipJa: "Quest Global社の抽出パイプラインにおける自動保存・検証レイヤー。" },
      { name: "MySQL", tip: "Relational database experience from coursework and personal projects.", tipJa: "授業や個人プロジェクトで培ったリレーショナルデータベースの経験。" },
      { name: "MongoDB", tip: "NoSQL data modeling for flexible, document based storage.", tipJa: "柔軟なドキュメント指向ストレージのためのNoSQLデータモデリング。" },
    ],
  },
  {
    id: "ops",
    label: "Cloud & Ops",
    labelJa: "クラウド・運用",
    items: [
      { name: "Azure DevOps", tip: "Used for version control and production deployment at Quest Global.", tipJa: "Quest Global社でバージョン管理と本番デプロイに使用。" },
      { name: "Docker", tip: "Containerized services for consistent, portable deployment.", tipJa: "一貫性のある可搬なデプロイのためにサービスをコンテナ化。" },
      { name: "AWS", tip: "Certified in AWS for Beginners (GreatLearning).", tipJa: "GreatLearning社の「AWS for Beginners」を修了。" },
      { name: "Oracle Cloud Infrastructure", tip: "Certified in OCI 2025 Foundations & AI Foundations Associate.", tipJa: "OCI 2025 FoundationsおよびAI Foundations Associateを取得。" },
      { name: "Git", tip: "Version control across every project in this portfolio.", tipJa: "本ポートフォリオの全プロジェクトにおけるバージョン管理。" },
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  desc: string;
  descJa: string;
  tags: string[];
  features: string[];
  featuresJa: string[];
  flow: string[];
  flowJa: string[];
  problem: string;
  problemJa: string;
  approach: string;
  approachJa: string;
  impact: string;
  impactJa: string;
};

export const PROJECTS: Project[] = [
  {
    index: "01 / Data + ML",
    title: "STOCK 5: AI Stock Recommendation System",
    desc: "An AI powered stock recommendation platform using a hybrid LSTM + ARIMA model to analyze market data and generate ranked, risk scored stock recommendations.",
    descJa: "LSTMとARIMAを組み合わせたハイブリッドモデルで市場データを分析し、順位付けとリスクスコアリングを行うAI株式推奨プラットフォーム。",
    tags: ["Python", "LSTM", "ARIMA", "Pandas", "NumPy", "React", "Node.js", "Yahoo Finance"],
    features: ["Top 5 recommendations", "Real time market data", "Risk scoring", "Confidence scoring", "Predicted returns", "Daily gainers & losers"],
    featuresJa: ["上位5銘柄の推奨", "リアルタイム市場データ", "リスクスコアリング", "信頼度スコアリング", "予測リターン", "値上がり・値下がりランキング"],
    flow: ["Market Data", "Data Processing", "LSTM + ARIMA", "Risk Analysis", "Recommendation"],
    flowJa: ["市場データ", "データ処理", "LSTM＋ARIMA", "リスク分析", "推奨結果"],
    problem:
      "Most retail facing stock tools show raw price history and leave the interpretation to the user. I wanted something that turns live market data into a ranked, explainable shortlist with confidence and risk scores.",
    problemJa:
      "多くの個人投資家向けツールは生の株価データを表示するだけで、解釈はユーザー任せです。私はライブの市場データを、信頼度とリスクスコア付きの説明可能な順位付きリストへ変換するツールを作りたいと考えました。",
    approach:
      "Pure LSTM models learn nonlinear patterns well but drift on longer horizons. ARIMA captures trend and seasonality but misses nonlinear structure. STOCK 5 runs both and blends their outputs so ARIMA corrects and stabilizes the LSTM forecast.",
    approachJa:
      "LSTM単体は非線形パターンの学習には強いものの、長期予測では精度がぶれやすい傾向があります。ARIMAはトレンドと季節性の把握には強い一方、非線形構造は捉えられません。STOCK 5では両方を実行して出力をブレンドし、ARIMAがLSTMの予測を補正・安定化させる仕組みにしました。",
    impact:
      "Market data is pulled through the Yahoo Finance API, cleaned with Pandas and NumPy, then scored by the ensemble model and served to a React dashboard showing top picks, daily movers, and per stock confidence.",
    impactJa:
      "Yahoo Finance APIから市場データを取得し、PandasとNumPyでクレンジングした後、アンサンブルモデルでスコアリングし、上位銘柄・値動きランキング・銘柄ごとの信頼度をReactダッシュボードで表示します。",
  },
  {
    index: "02 / Full Stack",
    title: "Real Time Online Auction Platform",
    desc: "A web application enabling users to list items and place bids in real time, with secure backend handling of authentication, validation, and winner selection.",
    descJa: "ユーザーが商品を出品しリアルタイムで入札できるウェブアプリケーション。認証、検証、落札者決定はバックエンドで安全に処理します。",
    tags: ["React", "Python", "Node.js"],
    features: ["Real time bidding", "User authentication", "Item listings", "Bid validation", "Winner selection", "Responsive interface"],
    featuresJa: ["リアルタイム入札", "ユーザー認証", "商品出品", "入札検証", "落札者決定", "レスポンシブUI"],
    flow: ["User Lists Item", "Live Bid Stream", "Bid Validation", "Winner Selection"],
    flowJa: ["商品出品", "リアルタイム入札", "入札検証", "落札者決定"],
    problem:
      "Traditional auction demos rarely handle the concurrency problem properly, so two users can end up thinking they both won the same item.",
    problemJa:
      "従来のオークションのデモの多くは同時実行の問題を適切に処理できておらず、2人のユーザーが同じ商品を落札したと誤認してしまうことがあります。",
    approach:
      "I built the bid pipeline around server side validation for every bid, so the backend, not the client, is always the single source of truth for the current highest bid.",
    approachJa:
      "すべての入札に対してサーバー側で検証を行う仕組みを構築し、現在の最高額入札の唯一の判断基準を常にバックエンド側に持たせるようにしました。",
    impact:
      "The result is a responsive auction flow where listings, live bids, and winner selection stay consistent even under rapid, concurrent bidding.",
    impactJa:
      "その結果、出品からリアルタイム入札、落札者決定まで、短時間に入札が集中する状況でも一貫性の保たれるオークションフローを実現しました。",
  },
  {
    index: "03 / Systems",
    title: "Enterprise Task Management Platform",
    desc: "An operations tool for supermarket teams to manage tasks, shifts, and daily workflows in one structured system.",
    descJa: "スーパーマーケットの現場チームがタスク、シフト、日次業務を一元管理できる業務ツール。",
    tags: ["HTML", "CSS", "C#", "SQLite"],
    features: ["Task management", "Clock in / out", "Inventory tracking", "Restocking", "Delivery tracking", "Customer service"],
    featuresJa: ["タスク管理", "出退勤打刻", "在庫管理", "補充管理", "配送管理", "顧客対応"],
    flow: ["Task Created", "Assigned to Shift", "Tracked to Completion", "Logged & Reported"],
    flowJa: ["タスク作成", "シフト割り当て", "完了まで追跡", "記録・報告"],
    problem:
      "Supermarket teams were coordinating tasks and shift handovers across paper lists and messaging apps, so nothing was tracked in one place.",
    problemJa:
      "スーパーマーケットの現場では、紙のリストやメッセージアプリを使ってタスクやシフトの引き継ぎを行っており、一元管理ができていませんでした。",
    approach:
      "I designed a single C# and SQLite backed system covering task assignment, clock in and out, inventory, restocking, and delivery tracking in one interface.",
    approachJa:
      "C#とSQLiteを基盤とした単一のシステムを設計し、タスク割り当て、出退勤、在庫、補充、配送管理を一つの画面にまとめました。",
    impact:
      "Shift teams now log and track work in one structured system, cutting the coordination overhead of juggling separate paper and chat based processes.",
    impactJa:
      "現場チームは一つの構造化されたシステムで業務を記録・追跡できるようになり、紙とチャットを併用していた頃の調整負担を削減しました。",
  },
];

export const CERTS = [
  { title: "Mastering DSA Using C and C++", titleJa: "C・C++によるデータ構造とアルゴリズム", issuer: "Udemy" },
  { title: "Learn Machine Learning and AI", titleJa: "機械学習とAIの基礎", issuer: "Udemy" },
  { title: "Artificial Intelligence & Machine Learning", titleJa: "人工知能・機械学習", issuer: "Teachnook" },
  { title: "CAMPK12 Coding Trial: Top 10%", titleJa: "CAMPK12コーディングトライアル 上位10%", issuer: "CAMPK12" },
  { title: "Web Development (Levels 2 to 4 + Backend)", titleJa: "Web開発（レベル2から4＋バックエンド）", issuer: "CAMPK12" },
  { title: "Foundation Course on Drones & Robotics", titleJa: "ドローン・ロボティクス基礎コース", issuer: "CMRIT CoE" },
  { title: "OCI 2025: Foundations Associate", titleJa: "OCI 2025 Foundations Associate", issuer: "Oracle" },
  { title: "OCI 2025: AI Foundations Associate", titleJa: "OCI 2025 AI Foundations Associate", issuer: "Oracle" },
  { title: "Foundation of C#", titleJa: "C#基礎", issuer: "Microsoft" },
  { title: "AWS for Beginners", titleJa: "AWS入門", issuer: "GreatLearning" },
  { title: "JLPT N5", titleJa: "日本語能力試験 N5", issuer: "Japan Foundation" },
];

export const ACHIEVEMENTS = [
  { tag: "Innovation", tagJa: "イノベーション", title: "IEEE Rapid Innovation Challenge", titleJa: "IEEE Rapid Innovation Challenge" },
  { tag: "Hackathon . 2023", tagJa: "ハッカソン . 2023", title: "Aptitude Hackathon 2023", titleJa: "Aptitude Hackathon 2023" },
  { tag: "Hackathon . 2024", tagJa: "ハッカソン . 2024", title: "Aptitude Hackathon 2024", titleJa: "Aptitude Hackathon 2024" },
  { tag: "Hackathon . 2025", tagJa: "ハッカソン . 2025", title: "Full Stack Fiesta 2025", titleJa: "Full Stack Fiesta 2025" },
  { tag: "Personal Build", tagJa: "個人開発", title: "4 RC aircraft designed & flown from scratch", titleJa: "RC飛行機を4機、一から設計・製作・飛行" },
];

export type JlptLevel = {
  level: string;
  status: "done" | "target";
};

export const JLPT_LADDER: JlptLevel[] = [
  { level: "N5", status: "done" },
  { level: "N4", status: "target" },
  { level: "N3", status: "target" },
  { level: "N2", status: "target" },
  { level: "N1", status: "target" },
];

export const LANGUAGES = [
  { en: "English", ja: "英語", level: "Fluent", levelJa: "流暢" },
  { en: "Hindi", ja: "ヒンディー語", level: "Fluent", levelJa: "流暢" },
  { en: "Kannada", ja: "カンナダ語", level: "Fluent", levelJa: "流暢" },
  { en: "Urdu", ja: "ウルドゥー語", level: "Fluent", levelJa: "流暢" },
];

export const EDUCATION = [
  {
    year: "2026",
    title: "Bachelor of Engineering",
    titleJa: "工学学士",
    org: "Computer Science, Artificial Intelligence & Machine Learning . CMR Institute of Technology, Bangalore",
    orgJa: "情報工学（AI・機械学習専攻） . CMR Institute of Technology, バンガロール",
    score: "CGPA: 8.8",
    scoreJa: "GPA: 8.8",
  },
  {
    year: "2022",
    title: "12th Grade . Science (CBSE)",
    titleJa: "高等学校卒業（理系・CBSEカリキュラム）",
    org: "Sri Chaitanya Techno School, Bengaluru",
    orgJa: "Sri Chaitanya Techno School, バンガロール",
    score: "83%",
    scoreJa: "83%",
  },
];
