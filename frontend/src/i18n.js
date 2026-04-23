import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Discover premium quality, delivered to your door."
      },
      "login": {
        "title": "Welcome Back",
        "subtitle": "Sign in to continue exploring.",
        "email": "Email Address",
        "password": "Password",
        "emailPlaceholder": "Enter your email",
        "passwordPlaceholder": "Enter your password",
        "button": "Sign In",
        "noAccount": "Don't have an account? Sign up"
      },
      "nav": {
        "home": "Home",
        "store": "Store",
        "about": "About",
        "profile": "Profile"
      },
      "profile": {
        "username": "Username",
        "email": "Email",
        "age": "Age",
        "password": "Password",
        "activityStatus": "Activity Status",
        "online": "Online",
        "offline": "Offline",
        "away": "Away",
        "editProfile": "Edit Profile",
        "saveChanges": "Save Changes",
        "cancel": "Cancel",
        "logout": "Logout",
        "switchAccount": "Switch Account",
        "changeLanguage": "Change Language",
        "exitToHome": "Exit to Homepage",
        "personalInfo": "Personal Information",
        "accountSettings": "Account Settings",
        "security": "Security",
        "preferences": "Preferences",
        "uploadPhoto": "Upload Photo",
        "changePassword": "Change Password",
        "currentPassword": "Current Password",
        "newPassword": "New Password",
        "confirmPassword": "Confirm Password",
        "deleteAccount": "Delete Account",
        "notifications": "Notifications",
        "privacy": "Privacy Settings",
        "help": "Help & Support"
      },
      "profile": {
        "username": "Username",
        "email": "Email",
        "age": "Age",
        "password": "Password",
        "activityStatus": "Activity Status",
        "online": "Online",
        "offline": "Offline",
        "away": "Away",
        "editProfile": "Edit Profile",
        "saveChanges": "Save Changes",
        "cancel": "Cancel",
        "logout": "Logout",
        "switchAccount": "Switch Account",
        "changeLanguage": "Change Language",
        "exitToHome": "Exit to Homepage",
        "personalInfo": "Personal Information",
        "accountSettings": "Account Settings",
        "security": "Security",
        "preferences": "Preferences",
        "uploadPhoto": "Upload Photo",
        "changePassword": "Change Password",
        "currentPassword": "Current Password",
        "newPassword": "New Password",
        "confirmPassword": "Confirm Password",
        "deleteAccount": "Delete Account",
        "notifications": "Notifications",
        "privacy": "Privacy Settings",
        "help": "Help & Support"
      }
    }
  },
  fr: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Découvrez une qualité supérieure, livrée à votre porte."
      },
      "login": {
        "title": "Bon retour",
        "subtitle": "Connectez-vous pour continuer à explorer.",
        "email": "Adresse de courriel",
        "password": "Mot de passe",
        "emailPlaceholder": "Entrez votre e-mail",
        "passwordPlaceholder": "Entrez votre mot de passe",
        "button": "Se connecter",
        "noAccount": "Vous n'avez pas de compte ? S'inscrire"
      },
      "nav": {
        "home": "Accueil",
        "store": "Boutique",
        "about": "À propos",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Zone d'accueil",
        "storeTitle": "Produits Phares",
        "aboutTitle": "À propos de la marque",
        "profileTitle": "Votre Profil"
      },
      "profile": {
        "username": "Nom d'utilisateur",
        "email": "E-mail",
        "age": "Âge",
        "password": "Mot de passe",
        "activityStatus": "Statut d'activité",
        "online": "En ligne",
        "offline": "Hors ligne",
        "away": "Absent",
        "editProfile": "Modifier le profil",
        "saveChanges": "Sauvegarder les modifications",
        "cancel": "Annuler",
        "logout": "Se déconnecter",
        "switchAccount": "Changer de compte",
        "changeLanguage": "Changer de langue",
        "exitToHome": "Retour à l'accueil",
        "personalInfo": "Informations personnelles",
        "accountSettings": "Paramètres du compte",
        "security": "Sécurité",
        "preferences": "Préférences",
        "uploadPhoto": "Télécharger une photo",
        "changePassword": "Changer le mot de passe",
        "currentPassword": "Mot de passe actuel",
        "newPassword": "Nouveau mot de passe",
        "confirmPassword": "Confirmer le mot de passe",
        "deleteAccount": "Supprimer le compte",
        "notifications": "Notifications",
        "privacy": "Paramètres de confidentialité",
        "help": "Aide et support"
      }
    }
  },
  es: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Descubre calidad premium, entregada en tu puerta."
      },
      "login": {
        "title": "Bienvenido de vuelta",
        "subtitle": "Inicia sesión para continuar explorando.",
        "email": "Dirección de correo electrónico",
        "password": "Contraseña",
        "emailPlaceholder": "Ingresa tu correo electrónico",
        "passwordPlaceholder": "Ingresa tu contraseña",
        "button": "Iniciar sesión",
        "noAccount": "¿No tienes una cuenta? Regístrate"
      },
      "nav": {
        "home": "Inicio",
        "store": "Tienda",
        "about": "Acerca de",
        "profile": "Perfil"
      },
      "pages": {
        "homeTitle": "Área de inicio",
        "storeTitle": "Productos destacados",
        "aboutTitle": "Acerca de la marca",
        "profileTitle": "Tu perfil"
      },
      "profile": {
        "username": "Nombre de usuario",
        "email": "Correo electrónico",
        "age": "Edad",
        "password": "Contraseña",
        "activityStatus": "Estado de actividad",
        "online": "En línea",
        "offline": "Fuera de línea",
        "away": "Ausente",
        "editProfile": "Editar perfil",
        "saveChanges": "Guardar cambios",
        "cancel": "Cancelar",
        "logout": "Cerrar sesión",
        "switchAccount": "Cambiar cuenta",
        "changeLanguage": "Cambiar idioma",
        "exitToHome": "Salir al inicio",
        "personalInfo": "Información personal",
        "accountSettings": "Configuración de cuenta",
        "security": "Seguridad",
        "preferences": "Preferencias",
        "uploadPhoto": "Subir foto",
        "changePassword": "Cambiar contraseña",
        "currentPassword": "Contraseña actual",
        "newPassword": "Nueva contraseña",
        "confirmPassword": "Confirmar contraseña",
        "deleteAccount": "Eliminar cuenta",
        "notifications": "Notificaciones",
        "privacy": "Configuración de privacidad",
        "help": "Ayuda y soporte"
      }
    }
  },
  de: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Entdecke Premium-Qualität, geliefert an deine Tür."
      },
      "login": {
        "title": "Willkommen zurück",
        "subtitle": "Melde dich an, um weiter zu erkunden.",
        "email": "E-Mail-Adresse",
        "password": "Passwort",
        "emailPlaceholder": "Gib deine E-Mail ein",
        "passwordPlaceholder": "Gib dein Passwort ein",
        "button": "Anmelden",
        "noAccount": "Kein Konto? Registrieren"
      },
      "nav": {
        "home": "Startseite",
        "store": "Shop",
        "about": "Über uns",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Startbereich",
        "storeTitle": "Ausgewählte Produkte",
        "aboutTitle": "Über die Marke",
        "profileTitle": "Dein Profil"
      },
      "profile": {
        "username": "Benutzername",
        "email": "E-Mail",
        "age": "Alter",
        "password": "Passwort",
        "activityStatus": "Aktivitätsstatus",
        "online": "Online",
        "offline": "Offline",
        "away": "Abwesend",
        "editProfile": "Profil bearbeiten",
        "saveChanges": "Änderungen speichern",
        "cancel": "Abbrechen",
        "logout": "Abmelden",
        "switchAccount": "Konto wechseln",
        "changeLanguage": "Sprache ändern",
        "exitToHome": "Zur Startseite",
        "personalInfo": "Persönliche Informationen",
        "accountSettings": "Kontoeinstellungen",
        "security": "Sicherheit",
        "preferences": "Einstellungen",
        "uploadPhoto": "Foto hochladen",
        "changePassword": "Passwort ändern",
        "currentPassword": "Aktuelles Passwort",
        "newPassword": "Neues Passwort",
        "confirmPassword": "Passwort bestätigen",
        "deleteAccount": "Konto löschen",
        "notifications": "Benachrichtigungen",
        "privacy": "Datenschutzeinstellungen",
        "help": "Hilfe und Support"
      }
    }
  },
  it: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Scopri qualità premium, consegnata alla tua porta."
      },
      "login": {
        "title": "Bentornato",
        "subtitle": "Accedi per continuare ad esplorare.",
        "email": "Indirizzo email",
        "password": "Password",
        "emailPlaceholder": "Inserisci la tua email",
        "passwordPlaceholder": "Inserisci la tua password",
        "button": "Accedi",
        "noAccount": "Non hai un account? Registrati"
      },
      "nav": {
        "home": "Home",
        "store": "Negozio",
        "about": "Chi siamo",
        "profile": "Profilo"
      },
      "pages": {
        "homeTitle": "Area Home",
        "storeTitle": "Prodotti in evidenza",
        "aboutTitle": "Chi siamo",
        "profileTitle": "Il tuo profilo"
      },
      "profile": {
        "username": "Nome utente",
        "email": "Email",
        "age": "Età",
        "password": "Password",
        "activityStatus": "Stato attività",
        "online": "Online",
        "offline": "Offline",
        "away": "Assente",
        "editProfile": "Modifica profilo",
        "saveChanges": "Salva modifiche",
        "cancel": "Annulla",
        "logout": "Esci",
        "switchAccount": "Cambia account",
        "changeLanguage": "Cambia lingua",
        "exitToHome": "Torna alla home",
        "personalInfo": "Informazioni personali",
        "accountSettings": "Impostazioni account",
        "security": "Sicurezza",
        "preferences": "Preferenze",
        "uploadPhoto": "Carica foto",
        "changePassword": "Cambia password",
        "currentPassword": "Password attuale",
        "newPassword": "Nuova password",
        "confirmPassword": "Conferma password",
        "deleteAccount": "Elimina account",
        "notifications": "Notifiche",
        "privacy": "Impostazioni privacy",
        "help": "Aiuto e supporto"
      }
    }
  },
  pt: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Descubra qualidade premium, entregue à sua porta."
      },
      "login": {
        "title": "Bem-vindo de volta",
        "subtitle": "Entre para continuar explorando.",
        "email": "Endereço de email",
        "password": "Senha",
        "emailPlaceholder": "Digite seu email",
        "passwordPlaceholder": "Digite sua senha",
        "button": "Entrar",
        "noAccount": "Não tem uma conta? Cadastre-se"
      },
      "nav": {
        "home": "Início",
        "store": "Loja",
        "about": "Sobre",
        "profile": "Perfil"
      },
      "pages": {
        "homeTitle": "Área inicial",
        "storeTitle": "Produtos em destaque",
        "aboutTitle": "Sobre a marca",
        "profileTitle": "Seu perfil"
      },
      "profile": {
        "username": "Nome de usuário",
        "email": "Email",
        "age": "Idade",
        "password": "Senha",
        "activityStatus": "Status de atividade",
        "online": "Online",
        "offline": "Offline",
        "away": "Ausente",
        "editProfile": "Editar perfil",
        "saveChanges": "Salvar alterações",
        "cancel": "Cancelar",
        "logout": "Sair",
        "switchAccount": "Trocar conta",
        "changeLanguage": "Mudar idioma",
        "exitToHome": "Ir para início",
        "personalInfo": "Informações pessoais",
        "accountSettings": "Configurações da conta",
        "security": "Segurança",
        "preferences": "Preferências",
        "uploadPhoto": "Enviar foto",
        "changePassword": "Mudar senha",
        "currentPassword": "Senha atual",
        "newPassword": "Nova senha",
        "confirmPassword": "Confirmar senha",
        "deleteAccount": "Excluir conta",
        "notifications": "Notificações",
        "privacy": "Configurações de privacidade",
        "help": "Ajuda e suporte"
      }
    }
  },
  ru: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Откройте премиум-качество, доставленное к вашей двери."
      },
      "login": {
        "title": "Добро пожаловать обратно",
        "subtitle": "Войдите, чтобы продолжить изучение.",
        "email": "Адрес электронной почты",
        "password": "Пароль",
        "emailPlaceholder": "Введите ваш email",
        "passwordPlaceholder": "Введите ваш пароль",
        "button": "Войти",
        "noAccount": "Нет аккаунта? Зарегистрироваться"
      },
      "nav": {
        "home": "Главная",
        "store": "Магазин",
        "about": "О нас",
        "profile": "Профиль"
      },
      "pages": {
        "homeTitle": "Главная область",
        "storeTitle": "Рекомендуемые товары",
        "aboutTitle": "О бренде",
        "profileTitle": "Ваш профиль"
      },
      "profile": {
        "username": "Имя пользователя",
        "email": "Email",
        "age": "Возраст",
        "password": "Пароль",
        "activityStatus": "Статус активности",
        "online": "Онлайн",
        "offline": "Оффлайн",
        "away": "Отсутствует",
        "editProfile": "Редактировать профиль",
        "saveChanges": "Сохранить изменения",
        "cancel": "Отмена",
        "logout": "Выйти",
        "switchAccount": "Сменить аккаунт",
        "changeLanguage": "Изменить язык",
        "exitToHome": "Вернуться на главную",
        "personalInfo": "Личная информация",
        "accountSettings": "Настройки аккаунта",
        "security": "Безопасность",
        "preferences": "Настройки",
        "uploadPhoto": "Загрузить фото",
        "changePassword": "Изменить пароль",
        "currentPassword": "Текущий пароль",
        "newPassword": "Новый пароль",
        "confirmPassword": "Подтвердить пароль",
        "deleteAccount": "Удалить аккаунт",
        "notifications": "Уведомления",
        "privacy": "Настройки приватности",
        "help": "Помощь и поддержка"
      }
    }
  },
  ja: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "プレミアム品質を発見し、お届けします。"
      },
      "login": {
        "title": "おかえりなさい",
        "subtitle": "探索を続けるためにサインインしてください。",
        "email": "メールアドレス",
        "password": "パスワード",
        "emailPlaceholder": "メールアドレスを入力",
        "passwordPlaceholder": "パスワードを入力",
        "button": "サインイン",
        "noAccount": "アカウントをお持ちでないですか？サインアップ"
      },
      "nav": {
        "home": "ホーム",
        "store": "ストア",
        "about": "会社概要",
        "profile": "プロフィール"
      },
      "pages": {
        "homeTitle": "ホームエリア",
        "storeTitle": "おすすめ商品",
        "aboutTitle": "ブランドについて",
        "profileTitle": "あなたのプロフィール"
      },
      "profile": {
        "username": "ユーザー名",
        "email": "メール",
        "age": "年齢",
        "password": "パスワード",
        "activityStatus": "アクティビティステータス",
        "online": "オンライン",
        "offline": "オフライン",
        "away": "離席中",
        "editProfile": "プロフィールを編集",
        "saveChanges": "変更を保存",
        "cancel": "キャンセル",
        "logout": "ログアウト",
        "switchAccount": "アカウントを切り替え",
        "changeLanguage": "言語を変更",
        "exitToHome": "ホームページへ戻る",
        "personalInfo": "個人情報",
        "accountSettings": "アカウント設定",
        "security": "セキュリティ",
        "preferences": "設定",
        "uploadPhoto": "写真をアップロード",
        "changePassword": "パスワードを変更",
        "currentPassword": "現在のパスワード",
        "newPassword": "新しいパスワード",
        "confirmPassword": "パスワードを確認",
        "deleteAccount": "アカウントを削除",
        "notifications": "通知",
        "privacy": "プライバシー設定",
        "help": "ヘルプとサポート"
      }
    }
  },
  zh: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "发现优质品质，送货上门。"
      },
      "login": {
        "title": "欢迎回来",
        "subtitle": "登录以继续探索。",
        "email": "电子邮件地址",
        "password": "密码",
        "emailPlaceholder": "输入您的电子邮件",
        "passwordPlaceholder": "输入您的密码",
        "button": "登录",
        "noAccount": "没有账户？注册"
      },
      "nav": {
        "home": "首页",
        "store": "商店",
        "about": "关于我们",
        "profile": "个人资料"
      },
      "pages": {
        "homeTitle": "首页区域",
        "storeTitle": "精选产品",
        "aboutTitle": "关于品牌",
        "profileTitle": "您的个人资料"
      },
      "profile": {
        "username": "用户名",
        "email": "电子邮件",
        "age": "年龄",
        "password": "密码",
        "activityStatus": "活动状态",
        "online": "在线",
        "offline": "离线",
        "away": "离开",
        "editProfile": "编辑个人资料",
        "saveChanges": "保存更改",
        "cancel": "取消",
        "logout": "登出",
        "switchAccount": "切换账户",
        "changeLanguage": "更改语言",
        "exitToHome": "返回首页",
        "personalInfo": "个人信息",
        "accountSettings": "账户设置",
        "security": "安全",
        "preferences": "偏好设置",
        "uploadPhoto": "上传照片",
        "changePassword": "更改密码",
        "currentPassword": "当前密码",
        "newPassword": "新密码",
        "confirmPassword": "确认密码",
        "deleteAccount": "删除账户",
        "notifications": "通知",
        "privacy": "隐私设置",
        "help": "帮助和支持"
      }
    }
  },
  ko: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "프리미엄 품질을 발견하고 문 앞까지 배송해 드립니다."
      },
      "login": {
        "title": "다시 오신 것을 환영합니다",
        "subtitle": "계속 탐색하려면 로그인하세요.",
        "email": "이메일 주소",
        "password": "비밀번호",
        "emailPlaceholder": "이메일을 입력하세요",
        "passwordPlaceholder": "비밀번호를 입력하세요",
        "button": "로그인",
        "noAccount": "계정이 없으신가요? 가입하기"
      },
      "nav": {
        "home": "홈",
        "store": "스토어",
        "about": "회사 소개",
        "profile": "프로필"
      },
      "pages": {
        "homeTitle": "홈 영역",
        "storeTitle": "추천 상품",
        "aboutTitle": "브랜드 소개",
        "profileTitle": "내 프로필"
      },
      "profile": {
        "username": "사용자 이름",
        "email": "이메일",
        "age": "나이",
        "password": "비밀번호",
        "activityStatus": "활동 상태",
        "online": "온라인",
        "offline": "오프라인",
        "away": "자리 비움",
        "editProfile": "프로필 편집",
        "saveChanges": "변경사항 저장",
        "cancel": "취소",
        "logout": "로그아웃",
        "switchAccount": "계정 전환",
        "changeLanguage": "언어 변경",
        "exitToHome": "홈페이지로 이동",
        "personalInfo": "개인 정보",
        "accountSettings": "계정 설정",
        "security": "보안",
        "preferences": "환경 설정",
        "uploadPhoto": "사진 업로드",
        "changePassword": "비밀번호 변경",
        "currentPassword": "현재 비밀번호",
        "newPassword": "새 비밀번호",
        "confirmPassword": "비밀번호 확인",
        "deleteAccount": "계정 삭제",
        "notifications": "알림",
        "privacy": "개인정보 설정",
        "help": "도움말 및 지원"
      }
    }
  },
  ar: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "اكتشف الجودة المتميزة، يتم تسليمها إلى باب منزلك."
      },
      "login": {
        "title": "مرحباً بعودتك",
        "subtitle": "سجل الدخول للمتابعة في الاستكشاف.",
        "email": "عنوان البريد الإلكتروني",
        "password": "كلمة المرور",
        "emailPlaceholder": "أدخل بريدك الإلكتروني",
        "passwordPlaceholder": "أدخل كلمة المرور",
        "button": "تسجيل الدخول",
        "noAccount": "ليس لديك حساب؟ سجل"
      },
      "nav": {
        "home": "الرئيسية",
        "store": "المتجر",
        "about": "حولنا",
        "profile": "الملف الشخصي"
      },
      "pages": {
        "homeTitle": "منطقة الرئيسية",
        "storeTitle": "المنتجات المميزة",
        "aboutTitle": "حول العلامة التجارية",
        "profileTitle": "ملفك الشخصي"
      },
      "profile": {
        "username": "اسم المستخدم",
        "email": "البريد الإلكتروني",
        "age": "العمر",
        "password": "كلمة المرور",
        "activityStatus": "حالة النشاط",
        "online": "متصل",
        "offline": "غير متصل",
        "away": "بعيد",
        "editProfile": "تعديل الملف الشخصي",
        "saveChanges": "حفظ التغييرات",
        "cancel": "إلغاء",
        "logout": "تسجيل الخروج",
        "switchAccount": "تبديل الحساب",
        "changeLanguage": "تغيير اللغة",
        "exitToHome": "العودة إلى الصفحة الرئيسية",
        "personalInfo": "المعلومات الشخصية",
        "accountSettings": "إعدادات الحساب",
        "security": "الأمان",
        "preferences": "التفضيلات",
        "uploadPhoto": "تحميل الصورة",
        "changePassword": "تغيير كلمة المرور",
        "currentPassword": "كلمة المرور الحالية",
        "newPassword": "كلمة المرور الجديدة",
        "confirmPassword": "تأكيد كلمة المرور",
        "deleteAccount": "حذف الحساب",
        "notifications": "الإشعارات",
        "privacy": "إعدادات الخصوصية",
        "help": "المساعدة والدعم"
      }
    }
  },
  hi: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "प्रीमियम गुणवत्ता खोजें, आपके दरवाजे पर पहुंचाया जाए।"
      },
      "login": {
        "title": "वापसी पर स्वागत है",
        "subtitle": "अन्वेषण जारी रखने के लिए साइन इन करें।",
        "email": "ईमेल पता",
        "password": "पासवर्ड",
        "emailPlaceholder": "अपना ईमेल दर्ज करें",
        "passwordPlaceholder": "अपना पासवर्ड दर्ज करें",
        "button": "साइन इन",
        "noAccount": "कोई खाता नहीं? साइन अप करें"
      },
      "nav": {
        "home": "होम",
        "store": "स्टोर",
        "about": "हमारे बारे में",
        "profile": "प्रोफाइल"
      },
      "pages": {
        "homeTitle": "होम क्षेत्र",
        "storeTitle": "विशेष उत्पाद",
        "aboutTitle": "ब्रांड के बारे में",
        "profileTitle": "आपकी प्रोफाइल"
      },
      "profile": {
        "username": "उपयोगकर्ता नाम",
        "email": "ईमेल",
        "age": "आयु",
        "password": "पासवर्ड",
        "activityStatus": "गतिविधि स्थिति",
        "online": "ऑनलाइन",
        "offline": "ऑफलाइन",
        "away": "दूर",
        "editProfile": "प्रोफाइल संपादित करें",
        "saveChanges": "परिवर्तन सहेजें",
        "cancel": "रद्द करें",
        "logout": "लॉग आउट",
        "switchAccount": "खाता बदलें",
        "changeLanguage": "भाषा बदलें",
        "exitToHome": "होमपेज पर जाएं",
        "personalInfo": "व्यक्तिगत जानकारी",
        "accountSettings": "खाता सेटिंग्स",
        "security": "सुरक्षा",
        "preferences": "प्राथमिकताएं",
        "uploadPhoto": "फोटो अपलोड करें",
        "changePassword": "पासवर्ड बदलें",
        "currentPassword": "वर्तमान पासवर्ड",
        "newPassword": "नया पासवर्ड",
        "confirmPassword": "पासवर्ड की पुष्टि करें",
        "deleteAccount": "खाता हटाएं",
        "notifications": "सूचनाएं",
        "privacy": "गोपनीयता सेटिंग्स",
        "help": "सहायता और समर्थन"
      }
    }
  },
  nl: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Ontdek premium kwaliteit, geleverd aan je deur."
      },
      "login": {
        "title": "Welkom terug",
        "subtitle": "Log in om verder te verkennen.",
        "email": "E-mailadres",
        "password": "Wachtwoord",
        "emailPlaceholder": "Voer je e-mail in",
        "passwordPlaceholder": "Voer je wachtwoord in",
        "button": "Inloggen",
        "noAccount": "Geen account? Registreer"
      },
      "nav": {
        "home": "Home",
        "store": "Winkel",
        "about": "Over ons",
        "profile": "Profiel"
      },
      "pages": {
        "homeTitle": "Homegebied",
        "storeTitle": "Uitgelichte producten",
        "aboutTitle": "Over het merk",
        "profileTitle": "Jouw profiel"
      },
      "profile": {
        "username": "Gebruikersnaam",
        "email": "E-mail",
        "age": "Leeftijd",
        "password": "Wachtwoord",
        "activityStatus": "Activiteitsstatus",
        "online": "Online",
        "offline": "Offline",
        "away": "Afwezig",
        "editProfile": "Profiel bewerken",
        "saveChanges": "Wijzigingen opslaan",
        "cancel": "Annuleren",
        "logout": "Uitloggen",
        "switchAccount": "Account wisselen",
        "changeLanguage": "Taal wijzigen",
        "exitToHome": "Naar homepage",
        "personalInfo": "Persoonlijke informatie",
        "accountSettings": "Accountinstellingen",
        "security": "Beveiliging",
        "preferences": "Voorkeuren",
        "uploadPhoto": "Foto uploaden",
        "changePassword": "Wachtwoord wijzigen",
        "currentPassword": "Huidig wachtwoord",
        "newPassword": "Nieuw wachtwoord",
        "confirmPassword": "Wachtwoord bevestigen",
        "deleteAccount": "Account verwijderen",
        "notifications": "Meldingen",
        "privacy": "Privacy-instellingen",
        "help": "Help en ondersteuning"
      }
    }
  },
  sv: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Upptäck premiumkvalitet, levererad till din dörr."
      },
      "login": {
        "title": "Välkommen tillbaka",
        "subtitle": "Logga in för att fortsätta utforska.",
        "email": "E-postadress",
        "password": "Lösenord",
        "emailPlaceholder": "Ange din e-post",
        "passwordPlaceholder": "Ange ditt lösenord",
        "button": "Logga in",
        "noAccount": "Inget konto? Registrera dig"
      },
      "nav": {
        "home": "Hem",
        "store": "Butik",
        "about": "Om oss",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Hemområde",
        "storeTitle": "Utvalda produkter",
        "aboutTitle": "Om varumärket",
        "profileTitle": "Din profil"
      },
      "profile": {
        "username": "Användarnamn",
        "email": "E-post",
        "age": "Ålder",
        "password": "Lösenord",
        "activityStatus": "Aktivitetsstatus",
        "online": "Online",
        "offline": "Offline",
        "away": "Borta",
        "editProfile": "Redigera profil",
        "saveChanges": "Spara ändringar",
        "cancel": "Avbryt",
        "logout": "Logga ut",
        "switchAccount": "Byt konto",
        "changeLanguage": "Byt språk",
        "exitToHome": "Till startsidan",
        "personalInfo": "Personlig information",
        "accountSettings": "Kontoinställningar",
        "security": "Säkerhet",
        "preferences": "Inställningar",
        "uploadPhoto": "Ladda upp foto",
        "changePassword": "Byt lösenord",
        "currentPassword": "Nuvarande lösenord",
        "newPassword": "Nytt lösenord",
        "confirmPassword": "Bekräfta lösenord",
        "deleteAccount": "Ta bort konto",
        "notifications": "Aviseringar",
        "privacy": "Sekretessinställningar",
        "help": "Hjälp och support"
      }
    }
  },
  da: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Opdag premiumkvalitet, leveret til din dør."
      },
      "login": {
        "title": "Velkommen tilbage",
        "subtitle": "Log ind for at fortsætte med at udforske.",
        "email": "E-mailadresse",
        "password": "Adgangskode",
        "emailPlaceholder": "Indtast din e-mail",
        "passwordPlaceholder": "Indtast din adgangskode",
        "button": "Log ind",
        "noAccount": "Ingen konto? Tilmeld dig"
      },
      "nav": {
        "home": "Hjem",
        "store": "Butik",
        "about": "Om os",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Hjemmeområde",
        "storeTitle": "Udvalgte produkter",
        "aboutTitle": "Om mærket",
        "profileTitle": "Din profil"
      },
      "profile": {
        "username": "Brugernavn",
        "email": "E-mail",
        "age": "Alder",
        "password": "Adgangskode",
        "activityStatus": "Aktivitetsstatus",
        "online": "Online",
        "offline": "Offline",
        "away": "Væk",
        "editProfile": "Rediger profil",
        "saveChanges": "Gem ændringer",
        "cancel": "Annuller",
        "logout": "Log ud",
        "switchAccount": "Skift konto",
        "changeLanguage": "Skift sprog",
        "exitToHome": "Til forsiden",
        "personalInfo": "Personlige oplysninger",
        "accountSettings": "Kontoindstillinger",
        "security": "Sikkerhed",
        "preferences": "Indstillinger",
        "uploadPhoto": "Upload foto",
        "changePassword": "Skift adgangskode",
        "currentPassword": "Nuværende adgangskode",
        "newPassword": "Ny adgangskode",
        "confirmPassword": "Bekræft adgangskode",
        "deleteAccount": "Slet konto",
        "notifications": "Meddelelser",
        "privacy": "Privatlivsindstillinger",
        "help": "Hjælp og support"
      }
    }
  },
  no: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Oppdag premiumkvalitet, levert til din dør."
      },
      "login": {
        "title": "Velkommen tilbake",
        "subtitle": "Logg inn for å fortsette å utforske.",
        "email": "E-postadresse",
        "password": "Passord",
        "emailPlaceholder": "Skriv inn e-posten din",
        "passwordPlaceholder": "Skriv inn passordet ditt",
        "button": "Logg inn",
        "noAccount": "Ingen konto? Registrer deg"
      },
      "nav": {
        "home": "Hjem",
        "store": "Butikk",
        "about": "Om oss",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Hjemmeområde",
        "storeTitle": "Utvalgte produkter",
        "aboutTitle": "Om merket",
        "profileTitle": "Din profil"
      },
      "profile": {
        "username": "Brukernavn",
        "email": "E-post",
        "age": "Alder",
        "password": "Passord",
        "activityStatus": "Aktivitetsstatus",
        "online": "Pålogget",
        "offline": "Avlogget",
        "away": "Borte",
        "editProfile": "Rediger profil",
        "saveChanges": "Lagre endringer",
        "cancel": "Avbryt",
        "logout": "Logg ut",
        "switchAccount": "Bytt konto",
        "changeLanguage": "Bytt språk",
        "exitToHome": "Til hjemmesiden",
        "personalInfo": "Personlig informasjon",
        "accountSettings": "Kontoinnstillinger",
        "security": "Sikkerhet",
        "preferences": "Innstillinger",
        "uploadPhoto": "Last opp foto",
        "changePassword": "Bytt passord",
        "currentPassword": "Gjeldende passord",
        "newPassword": "Nytt passord",
        "confirmPassword": "Bekreft passord",
        "deleteAccount": "Slett konto",
        "notifications": "Varsler",
        "privacy": "Personverninnstillinger",
        "help": "Hjelp og støtte"
      }
    }
  },
  fi: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Löydä premium-laatu, toimitettu kotiovellesi."
      },
      "login": {
        "title": "Tervetuloa takaisin",
        "subtitle": "Kirjaudu sisään jatkaaksesi tutkimista.",
        "email": "Sähköpostiosoite",
        "password": "Salasana",
        "emailPlaceholder": "Syötä sähköpostisi",
        "passwordPlaceholder": "Syötä salasanasi",
        "button": "Kirjaudu sisään",
        "noAccount": "Ei tiliä? Rekisteröidy"
      },
      "nav": {
        "home": "Koti",
        "store": "Kauppa",
        "about": "Tietoa meistä",
        "profile": "Profiili"
      },
      "pages": {
        "homeTitle": "Kotialue",
        "storeTitle": "Esittelyssä olevat tuotteet",
        "aboutTitle": "Tietoa merkistä",
        "profileTitle": "Profiilisi"
      },
      "profile": {
        "username": "Käyttäjänimi",
        "email": "Sähköposti",
        "age": "Ikä",
        "password": "Salasana",
        "activityStatus": "Aktiivisuustila",
        "online": "Paikalla",
        "offline": "Poissa",
        "away": "Poissa",
        "editProfile": "Muokkaa profiilia",
        "saveChanges": "Tallenna muutokset",
        "cancel": "Peruuta",
        "logout": "Kirjaudu ulos",
        "switchAccount": "Vaihda tiliä",
        "changeLanguage": "Vaihda kieltä",
        "exitToHome": "Siirry kotisivulle",
        "personalInfo": "Henkilötiedot",
        "accountSettings": "Tilin asetukset",
        "security": "Turvallisuus",
        "preferences": "Asetukset",
        "uploadPhoto": "Lataa kuva",
        "changePassword": "Vaihda salasana",
        "currentPassword": "Nykyinen salasana",
        "newPassword": "Uusi salasana",
        "confirmPassword": "Vahvista salasana",
        "deleteAccount": "Poista tili",
        "notifications": "Ilmoitukset",
        "privacy": "Yksityisyysasetukset",
        "help": "Ohjeet ja tuki"
      }
    }
  },
  pl: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Odkryj jakość premium, dostarczoną pod Twoje drzwi."
      },
      "login": {
        "title": "Witaj ponownie",
        "subtitle": "Zaloguj się, aby kontynuować odkrywanie.",
        "email": "Adres e-mail",
        "password": "Hasło",
        "emailPlaceholder": "Wprowadź swój e-mail",
        "passwordPlaceholder": "Wprowadź swoje hasło",
        "button": "Zaloguj się",
        "noAccount": "Nie masz konta? Zarejestruj się"
      },
      "nav": {
        "home": "Strona główna",
        "store": "Sklep",
        "about": "O nas",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Obszar główny",
        "storeTitle": "Polecane produkty",
        "aboutTitle": "O marce",
        "profileTitle": "Twój profil"
      },
      "profile": {
        "username": "Nazwa użytkownika",
        "email": "E-mail",
        "age": "Wiek",
        "password": "Hasło",
        "activityStatus": "Status aktywności",
        "online": "Online",
        "offline": "Offline",
        "away": "Nieobecny",
        "editProfile": "Edytuj profil",
        "saveChanges": "Zapisz zmiany",
        "cancel": "Anuluj",
        "logout": "Wyloguj się",
        "switchAccount": "Przełącz konto",
        "changeLanguage": "Zmień język",
        "exitToHome": "Przejdź do strony głównej",
        "personalInfo": "Informacje osobiste",
        "accountSettings": "Ustawienia konta",
        "security": "Bezpieczeństwo",
        "preferences": "Preferencje",
        "uploadPhoto": "Prześlij zdjęcie",
        "changePassword": "Zmień hasło",
        "currentPassword": "Aktualne hasło",
        "newPassword": "Nowe hasło",
        "confirmPassword": "Potwierdź hasło",
        "deleteAccount": "Usuń konto",
        "notifications": "Powiadomienia",
        "privacy": "Ustawienia prywatności",
        "help": "Pomoc i wsparcie"
      }
    }
  },
  tr: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Premium kaliteyi keşfedin, kapınıza teslim edilsin."
      },
      "login": {
        "title": "Tekrar hoş geldiniz",
        "subtitle": "Keşfetmeye devam etmek için giriş yapın.",
        "email": "E-posta adresi",
        "password": "Şifre",
        "emailPlaceholder": "E-postanızı girin",
        "passwordPlaceholder": "Şifrenizi girin",
        "button": "Giriş yap",
        "noAccount": "Hesabınız yok mu? Kaydolun"
      },
      "nav": {
        "home": "Ana sayfa",
        "store": "Mağaza",
        "about": "Hakkımızda",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Ana sayfa alanı",
        "storeTitle": "Öne çıkan ürünler",
        "aboutTitle": "Marka hakkında",
        "profileTitle": "Profiliniz"
      },
      "profile": {
        "username": "Kullanıcı adı",
        "email": "E-posta",
        "age": "Yaş",
        "password": "Şifre",
        "activityStatus": "Aktivite durumu",
        "online": "Çevrimiçi",
        "offline": "Çevrimdışı",
        "away": "Uzakta",
        "editProfile": "Profili düzenle",
        "saveChanges": "Değişiklikleri kaydet",
        "cancel": "İptal",
        "logout": "Çıkış yap",
        "switchAccount": "Hesap değiştir",
        "changeLanguage": "Dil değiştir",
        "exitToHome": "Ana sayfaya dön",
        "personalInfo": "Kişisel bilgiler",
        "accountSettings": "Hesap ayarları",
        "security": "Güvenlik",
        "preferences": "Tercihler",
        "uploadPhoto": "Fotoğraf yükle",
        "changePassword": "Şifre değiştir",
        "currentPassword": "Mevcut şifre",
        "newPassword": "Yeni şifre",
        "confirmPassword": "Şifreyi onayla",
        "deleteAccount": "Hesabı sil",
        "notifications": "Bildirimler",
        "privacy": "Gizlilik ayarları",
        "help": "Yardım ve destek"
      }
    }
  },
  he: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "גלה איכות פרימיום, מועברת לדלתך."
      },
      "login": {
        "title": "ברוך שובך",
        "subtitle": "היכנס כדי להמשיך לחקור.",
        "email": "כתובת דוא\"ל",
        "password": "סיסמה",
        "emailPlaceholder": "הזן את הדוא\"ל שלך",
        "passwordPlaceholder": "הזן את הסיסמה שלך",
        "button": "היכנס",
        "noAccount": "אין לך חשבון? הירשם"
      },
      "nav": {
        "home": "בית",
        "store": "חנות",
        "about": "אודותינו",
        "profile": "פרופיל"
      },
      "pages": {
        "homeTitle": "אזור הבית",
        "storeTitle": "מוצרים מובחרים",
        "aboutTitle": "אודות המותג",
        "profileTitle": "הפרופיל שלך"
      },
      "profile": {
        "username": "שם משתמש",
        "email": "דוא\"ל",
        "age": "גיל",
        "password": "סיסמה",
        "activityStatus": "סטטוס פעילות",
        "online": "מחובר",
        "offline": "לא מחובר",
        "away": "רחוק",
        "editProfile": "ערוך פרופיל",
        "saveChanges": "שמור שינויים",
        "cancel": "ביטול",
        "logout": "התנתק",
        "switchAccount": "החלף חשבון",
        "changeLanguage": "שנה שפה",
        "exitToHome": "חזור לדף הבית",
        "personalInfo": "מידע אישי",
        "accountSettings": "הגדרות חשבון",
        "security": "אבטחה",
        "preferences": "העדפות",
        "uploadPhoto": "העלה תמונה",
        "changePassword": "שנה סיסמה",
        "currentPassword": "סיסמה נוכחית",
        "newPassword": "סיסמה חדשה",
        "confirmPassword": "אשר סיסמה",
        "deleteAccount": "מחק חשבון",
        "notifications": "התראות",
        "privacy": "הגדרות פרטיות",
        "help": "עזרה ותמיכה"
      }
    }
  },
  cs: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Objevte prémiovou kvalitu, doručenou až k vašim dveřím."
      },
      "login": {
        "title": "Vítejte zpět",
        "subtitle": "Přihlaste se a pokračujte v prozkoumávání.",
        "email": "E-mailová adresa",
        "password": "Heslo",
        "emailPlaceholder": "Zadejte svůj e-mail",
        "passwordPlaceholder": "Zadejte své heslo",
        "button": "Přihlásit se",
        "noAccount": "Nemáte účet? Zaregistrujte se"
      },
      "nav": {
        "home": "Domů",
        "store": "Obchod",
        "about": "O nás",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Domovská oblast",
        "storeTitle": "Vybrané produkty",
        "aboutTitle": "O značce",
        "profileTitle": "Váš profil"
      },
      "profile": {
        "username": "Uživatelské jméno",
        "email": "E-mail",
        "age": "Věk",
        "password": "Heslo",
        "activityStatus": "Stav aktivity",
        "online": "Online",
        "offline": "Offline",
        "away": "Pryč",
        "editProfile": "Upravit profil",
        "saveChanges": "Uložit změny",
        "cancel": "Zrušit",
        "logout": "Odhlásit se",
        "switchAccount": "Přepnout účet",
        "changeLanguage": "Změnit jazyk",
        "exitToHome": "Přejít na domovskou stránku",
        "personalInfo": "Osobní informace",
        "accountSettings": "Nastavení účtu",
        "security": "Zabezpečení",
        "preferences": "Předvolby",
        "uploadPhoto": "Nahrát fotografii",
        "changePassword": "Změnit heslo",
        "currentPassword": "Současné heslo",
        "newPassword": "Nové heslo",
        "confirmPassword": "Potvrdit heslo",
        "deleteAccount": "Smazat účet",
        "notifications": "Oznámení",
        "privacy": "Nastavení soukromí",
        "help": "Nápověda a podpora"
      }
    }
  },
  th: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "ค้นพบคุณภาพระดับพรีเมียม ส่งตรงถึงประตูบ้านคุณ"
      },
      "login": {
        "title": "ยินดีต้อนรับกลับ",
        "subtitle": "เข้าสู่ระบบเพื่อดำเนินการสำรวจต่อ",
        "email": "ที่อยู่อีเมล",
        "password": "รหัสผ่าน",
        "emailPlaceholder": "ป้อนอีเมลของคุณ",
        "passwordPlaceholder": "ป้อนรหัสผ่านของคุณ",
        "button": "เข้าสู่ระบบ",
        "noAccount": "ไม่มีบัญชี? สมัครสมาชิก"
      },
      "nav": {
        "home": "หน้าแรก",
        "store": "ร้านค้า",
        "about": "เกี่ยวกับเรา",
        "profile": "โปรไฟล์"
      },
      "pages": {
        "homeTitle": "พื้นที่หน้าแรก",
        "storeTitle": "สินค้าแนะนำ",
        "aboutTitle": "เกี่ยวกับแบรนด์",
        "profileTitle": "โปรไฟล์ของคุณ"
      },
      "profile": {
        "username": "ชื่อผู้ใช้",
        "email": "อีเมล",
        "age": "อายุ",
        "password": "รหัสผ่าน",
        "activityStatus": "สถานะกิจกรรม",
        "online": "ออนไลน์",
        "offline": "ออฟไลน์",
        "away": "ไม่อยู่",
        "editProfile": "แก้ไขโปรไฟล์",
        "saveChanges": "บันทึกการเปลี่ยนแปลง",
        "cancel": "ยกเลิก",
        "logout": "ออกจากระบบ",
        "switchAccount": "เปลี่ยนบัญชี",
        "changeLanguage": "เปลี่ยนภาษา",
        "exitToHome": "กลับไปหน้าแรก",
        "personalInfo": "ข้อมูลส่วนตัว",
        "accountSettings": "การตั้งค่าบัญชี",
        "security": "ความปลอดภัย",
        "preferences": "การตั้งค่า",
        "uploadPhoto": "อัปโหลดรูปภาพ",
        "changePassword": "เปลี่ยนรหัสผ่าน",
        "currentPassword": "รหัสผ่านปัจจุบัน",
        "newPassword": "รหัสผ่านใหม่",
        "confirmPassword": "ยืนยันรหัสผ่าน",
        "deleteAccount": "ลบบัญชี",
        "notifications": "การแจ้งเตือน",
        "privacy": "การตั้งค่าความเป็นส่วนตัว",
        "help": "ความช่วยเหลือและการสนับสนุน"
      }
    }
  },
  uk: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Відкрийте преміум-якість, доставлену до ваших дверей."
      },
      "login": {
        "title": "Ласкаво просимо назад",
        "subtitle": "Увійдіть, щоб продовжити дослідження.",
        "email": "Адреса електронної пошти",
        "password": "Пароль",
        "emailPlaceholder": "Введіть вашу електронну пошту",
        "passwordPlaceholder": "Введіть ваш пароль",
        "button": "Увійти",
        "noAccount": "Немає облікового запису? Зареєструватися"
      },
      "nav": {
        "home": "Головна",
        "store": "Магазин",
        "about": "Про нас",
        "profile": "Профіль"
      },
      "pages": {
        "homeTitle": "Головна область",
        "storeTitle": "Рекомендовані товари",
        "aboutTitle": "Про бренд",
        "profileTitle": "Ваш профіль"
      },
      "profile": {
        "username": "Ім'я користувача",
        "email": "Електронна пошта",
        "age": "Вік",
        "password": "Пароль",
        "activityStatus": "Статус активності",
        "online": "Онлайн",
        "offline": "Офлайн",
        "away": "Відсутній",
        "editProfile": "Редагувати профіль",
        "saveChanges": "Зберегти зміни",
        "cancel": "Скасувати",
        "logout": "Вийти",
        "switchAccount": "Змінити обліковий запис",
        "changeLanguage": "Змінити мову",
        "exitToHome": "До головної",
        "personalInfo": "Особиста інформація",
        "accountSettings": "Налаштування облікового запису",
        "security": "Безпека",
        "preferences": "Налаштування",
        "uploadPhoto": "Завантажити фото",
        "changePassword": "Змінити пароль",
        "currentPassword": "Поточний пароль",
        "newPassword": "Новий пароль",
        "confirmPassword": "Підтвердити пароль",
        "deleteAccount": "Видалити обліковий запис",
        "notifications": "Сповіщення",
        "privacy": "Налаштування конфіденційності",
        "help": "Допомога та підтримка"
      }
    }
  },
  ro: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Descoperiți calitatea premium, livrată la ușa dumneavoastră."
      },
      "login": {
        "title": "Bun venit înapoi",
        "subtitle": "Conectați-vă pentru a continua explorarea.",
        "email": "Adresă de email",
        "password": "Parolă",
        "emailPlaceholder": "Introduceți email-ul dumneavoastră",
        "passwordPlaceholder": "Introduceți parola dumneavoastră",
        "button": "Conectați-vă",
        "noAccount": "Nu aveți cont? Înregistrați-vă"
      },
      "nav": {
        "home": "Acasă",
        "store": "Magazin",
        "about": "Despre noi",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Zona acasă",
        "storeTitle": "Produse prezentate",
        "aboutTitle": "Despre marcă",
        "profileTitle": "Profilul dumneavoastră"
      },
      "profile": {
        "username": "Nume utilizator",
        "email": "Email",
        "age": "Vârstă",
        "password": "Parolă",
        "activityStatus": "Stare activitate",
        "online": "Online",
        "offline": "Offline",
        "away": "Plecat",
        "editProfile": "Editați profilul",
        "saveChanges": "Salvați modificările",
        "cancel": "Anulați",
        "logout": "Deconectați-vă",
        "switchAccount": "Schimbați contul",
        "changeLanguage": "Schimbați limba",
        "exitToHome": "Înapoi la pagina principală",
        "personalInfo": "Informații personale",
        "accountSettings": "Setări cont",
        "security": "Securitate",
        "preferences": "Preferințe",
        "uploadPhoto": "Încărcați fotografie",
        "changePassword": "Schimbați parola",
        "currentPassword": "Parola actuală",
        "newPassword": "Parolă nouă",
        "confirmPassword": "Confirmați parola",
        "deleteAccount": "Ștergeți contul",
        "notifications": "Notificări",
        "privacy": "Setări confidențialitate",
        "help": "Ajutor și suport"
      }
    }
  },
  hu: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Fedezze fel a prémium minőséget, szállítva az ajtajához."
      },
      "login": {
        "title": "Üdvözöljük újra",
        "subtitle": "Jelentkezzen be a felfedezés folytatásához.",
        "email": "E-mail cím",
        "password": "Jelszó",
        "emailPlaceholder": "Adja meg az e-mail címét",
        "passwordPlaceholder": "Adja meg a jelszavát",
        "button": "Bejelentkezés",
        "noAccount": "Nincs fiókja? Regisztráljon"
      },
      "nav": {
        "home": "Kezdőlap",
        "store": "Bolt",
        "about": "Rólunk",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Kezdőlap terület",
        "storeTitle": "Kiemelt termékek",
        "aboutTitle": "A márkáról",
        "profileTitle": "Az Ön profilja"
      },
      "profile": {
        "username": "Felhasználónév",
        "email": "E-mail",
        "age": "Kor",
        "password": "Jelszó",
        "activityStatus": "Tevékenységi állapot",
        "online": "Online",
        "offline": "Offline",
        "away": "Távol",
        "editProfile": "Profil szerkesztése",
        "saveChanges": "Változások mentése",
        "cancel": "Mégse",
        "logout": "Kijelentkezés",
        "switchAccount": "Fiók váltása",
        "changeLanguage": "Nyelv váltása",
        "exitToHome": "Vissza a kezdőlapra",
        "personalInfo": "Személyes adatok",
        "accountSettings": "Fiók beállítások",
        "security": "Biztonság",
        "preferences": "Beállítások",
        "uploadPhoto": "Fotó feltöltése",
        "changePassword": "Jelszó megváltoztatása",
        "currentPassword": "Jelenlegi jelszó",
        "newPassword": "Új jelszó",
        "confirmPassword": "Jelszó megerősítése",
        "deleteAccount": "Fiók törlése",
        "notifications": "Értesítések",
        "privacy": "Adatvédelmi beállítások",
        "help": "Súgó és támogatás"
      }
    }
  },
  vi: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Khám phá chất lượng cao cấp, giao tận cửa nhà bạn."
      },
      "login": {
        "title": "Chào mừng quay trở lại",
        "subtitle": "Đăng nhập để tiếp tục khám phá.",
        "email": "Địa chỉ email",
        "password": "Mật khẩu",
        "emailPlaceholder": "Nhập email của bạn",
        "passwordPlaceholder": "Nhập mật khẩu của bạn",
        "button": "Đăng nhập",
        "noAccount": "Chưa có tài khoản? Đăng ký"
      },
      "nav": {
        "home": "Trang chủ",
        "store": "Cửa hàng",
        "about": "Về chúng tôi",
        "profile": "Hồ sơ"
      },
      "pages": {
        "homeTitle": "Khu vực trang chủ",
        "storeTitle": "Sản phẩm nổi bật",
        "aboutTitle": "Về thương hiệu",
        "profileTitle": "Hồ sơ của bạn"
      },
      "profile": {
        "username": "Tên người dùng",
        "email": "Email",
        "age": "Tuổi",
        "password": "Mật khẩu",
        "activityStatus": "Trạng thái hoạt động",
        "online": "Trực tuyến",
        "offline": "Ngoại tuyến",
        "away": "Vắng mặt",
        "editProfile": "Chỉnh sửa hồ sơ",
        "saveChanges": "Lưu thay đổi",
        "cancel": "Hủy",
        "logout": "Đăng xuất",
        "switchAccount": "Chuyển tài khoản",
        "changeLanguage": "Thay đổi ngôn ngữ",
        "exitToHome": "Về trang chủ",
        "personalInfo": "Thông tin cá nhân",
        "accountSettings": "Cài đặt tài khoản",
        "security": "Bảo mật",
        "preferences": "Tùy chọn",
        "uploadPhoto": "Tải lên ảnh",
        "changePassword": "Thay đổi mật khẩu",
        "currentPassword": "Mật khẩu hiện tại",
        "newPassword": "Mật khẩu mới",
        "confirmPassword": "Xác nhận mật khẩu",
        "deleteAccount": "Xóa tài khoản",
        "notifications": "Thông báo",
        "privacy": "Cài đặt quyền riêng tư",
        "help": "Trợ giúp và hỗ trợ"
      }
    }
  },
  bg: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Открийте премиум качество, доставено до вратата ви."
      },
      "login": {
        "title": "Добре дошли отново",
        "subtitle": "Влезте, за да продължите да изследвате.",
        "email": "Имейл адрес",
        "password": "Парола",
        "emailPlaceholder": "Въведете имейла си",
        "passwordPlaceholder": "Въведете паролата си",
        "button": "Влезте",
        "noAccount": "Нямате акаунт? Регистрирайте се"
      },
      "nav": {
        "home": "Начало",
        "store": "Магазин",
        "about": "За нас",
        "profile": "Профил"
      },
      "pages": {
        "homeTitle": "Начална област",
        "storeTitle": "Представени продукти",
        "aboutTitle": "За марката",
        "profileTitle": "Вашият профил"
      },
      "profile": {
        "username": "Потребителско име",
        "email": "Имейл",
        "age": "Възраст",
        "password": "Парола",
        "activityStatus": "Статус на активност",
        "online": "Онлайн",
        "offline": "Офлайн",
        "away": "Отсъстващ",
        "editProfile": "Редактиране на профил",
        "saveChanges": "Запазване на промените",
        "cancel": "Отказ",
        "logout": "Изход",
        "switchAccount": "Смяна на акаунт",
        "changeLanguage": "Смяна на език",
        "exitToHome": "Към началната страница",
        "personalInfo": "Лична информация",
        "accountSettings": "Настройки на акаунта",
        "security": "Сигурност",
        "preferences": "Предпочитания",
        "uploadPhoto": "Качване на снимка",
        "changePassword": "Смяна на парола",
        "currentPassword": "Текуща парола",
        "newPassword": "Нова парола",
        "confirmPassword": "Потвърждаване на парола",
        "deleteAccount": "Изтриване на акаунт",
        "notifications": "Известия",
        "privacy": "Настройки за поверителност",
        "help": "Помощ и поддръжка"
      }
    }
  },
  hr: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Otkrijte premium kvalitetu, dostavljenu na vaša vrata."
      },
      "login": {
        "title": "Dobrodošli natrag",
        "subtitle": "Prijavite se da nastavite istraživati.",
        "email": "Adresa e-pošte",
        "password": "Lozinka",
        "emailPlaceholder": "Unesite svoju e-poštu",
        "passwordPlaceholder": "Unesite svoju lozinku",
        "button": "Prijavite se",
        "noAccount": "Nemate račun? Registrirajte se"
      },
      "nav": {
        "home": "Početna",
        "store": "Trgovina",
        "about": "O nama",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Početno područje",
        "storeTitle": "Istaknuti proizvodi",
        "aboutTitle": "O brandu",
        "profileTitle": "Vaš profil"
      },
      "profile": {
        "username": "Korisničko ime",
        "email": "E-pošta",
        "age": "Dob",
        "password": "Lozinka",
        "activityStatus": "Status aktivnosti",
        "online": "Online",
        "offline": "Offline",
        "away": "Odsutan",
        "editProfile": "Uredite profil",
        "saveChanges": "Spremite promjene",
        "cancel": "Otkažite",
        "logout": "Odjavite se",
        "switchAccount": "Promijenite račun",
        "changeLanguage": "Promijenite jezik",
        "exitToHome": "Idite na početnu",
        "personalInfo": "Osobne informacije",
        "accountSettings": "Postavke računa",
        "security": "Sigurnost",
        "preferences": "Postavke",
        "uploadPhoto": "Prenesite fotografiju",
        "changePassword": "Promijenite lozinku",
        "currentPassword": "Trenutna lozinka",
        "newPassword": "Nova lozinka",
        "confirmPassword": "Potvrdite lozinku",
        "deleteAccount": "Izbrišite račun",
        "notifications": "Obavijesti",
        "privacy": "Postavke privatnosti",
        "help": "Pomoć i podrška"
      }
    }
  },
  sk: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Objavte prémiovú kvalitu, doručenú až k vašim dverám."
      },
      "login": {
        "title": "Vitajte späť",
        "subtitle": "Prihláste sa a pokračujte v objavovaní.",
        "email": "E-mailová adresa",
        "password": "Heslo",
        "emailPlaceholder": "Zadajte svoj e-mail",
        "passwordPlaceholder": "Zadajte svoje heslo",
        "button": "Prihlásiť sa",
        "noAccount": "Nemáte účet? Zaregistrujte sa"
      },
      "nav": {
        "home": "Domov",
        "store": "Obchod",
        "about": "O nás",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Domovská oblasť",
        "storeTitle": "Vybrané produkty",
        "aboutTitle": "O značke",
        "profileTitle": "Váš profil"
      },
      "profile": {
        "username": "Používateľské meno",
        "email": "E-mail",
        "age": "Vek",
        "password": "Heslo",
        "activityStatus": "Stav aktivity",
        "online": "Online",
        "offline": "Offline",
        "away": "Preč",
        "editProfile": "Upraviť profil",
        "saveChanges": "Uložiť zmeny",
        "cancel": "Zrušiť",
        "logout": "Odhlásiť sa",
        "switchAccount": "Prepnúť účet",
        "changeLanguage": "Zmeniť jazyk",
        "exitToHome": "Prejsť na domovskú stránku",
        "personalInfo": "Osobné informácie",
        "accountSettings": "Nastavenia účtu",
        "security": "Zabezpečenie",
        "preferences": "Predvoľby",
        "uploadPhoto": "Nahrať fotografiu",
        "changePassword": "Zmeniť heslo",
        "currentPassword": "Súčasné heslo",
        "newPassword": "Nové heslo",
        "confirmPassword": "Potvrdiť heslo",
        "deleteAccount": "Zmazať účet",
        "notifications": "Oznámenia",
        "privacy": "Nastavenia súkromia",
        "help": "Pomoc a podpora"
      }
    }
  },
  sl: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Odkrijte premium kakovost, dostavljeno na vaša vrata."
      },
      "login": {
        "title": "Dobrodošli nazaj",
        "subtitle": "Prijavite se, da nadaljujete z raziskovanjem.",
        "email": "E-poštni naslov",
        "password": "Geslo",
        "emailPlaceholder": "Vnesite svoj e-poštni naslov",
        "passwordPlaceholder": "Vnesite svoje geslo",
        "button": "Prijavite se",
        "noAccount": "Nimate računa? Registrirajte se"
      },
      "nav": {
        "home": "Domov",
        "store": "Trgovina",
        "about": "O nas",
        "profile": "Profil"
      },
      "pages": {
        "homeTitle": "Domače območje",
        "storeTitle": "Izbrani izdelki",
        "aboutTitle": "O blagovni znamki",
        "profileTitle": "Vaš profil"
      },
      "profile": {
        "username": "Uporabniško ime",
        "email": "E-pošta",
        "age": "Starost",
        "password": "Geslo",
        "activityStatus": "Status dejavnosti",
        "online": "Spletu",
        "offline": "Brez povezave",
        "away": "Odsoten",
        "editProfile": "Uredite profil",
        "saveChanges": "Shranite spremembe",
        "cancel": "Prekličite",
        "logout": "Odjavite se",
        "switchAccount": "Preklopite račun",
        "changeLanguage": "Spremenite jezik",
        "exitToHome": "Pojdite na domačo stran",
        "personalInfo": "Osebni podatki",
        "accountSettings": "Nastavitve računa",
        "security": "Varnost",
        "preferences": "Nastavitve",
        "uploadPhoto": "Naložite fotografijo",
        "changePassword": "Spremenite geslo",
        "currentPassword": "Trenutno geslo",
        "newPassword": "Novo geslo",
        "confirmPassword": "Potrdite geslo",
        "deleteAccount": "Izbrišite račun",
        "notifications": "Obvestila",
        "privacy": "Nastavitve zasebnosti",
        "help": "Pomoč in podpora"
      }
    }
  },
  et: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Avastage premium kvaliteet, tarnitud teie uksele."
      },
      "login": {
        "title": "Tere tulemast tagasi",
        "subtitle": "Logige sisse, et jätkata avastamist.",
        "email": "E-posti aadress",
        "password": "Parool",
        "emailPlaceholder": "Sisestage oma e-post",
        "passwordPlaceholder": "Sisestage oma parool",
        "button": "Logige sisse",
        "noAccount": "Pole kontot? Registreeruge"
      },
      "nav": {
        "home": "Avaleht",
        "store": "Pood",
        "about": "Meist",
        "profile": "Profiil"
      },
      "pages": {
        "homeTitle": "Avalehe ala",
        "storeTitle": "Esiletõstetud tooted",
        "aboutTitle": "Brändi kohta",
        "profileTitle": "Teie profiil"
      },
      "profile": {
        "username": "Kasutajanimi",
        "email": "E-post",
        "age": "Vanus",
        "password": "Parool",
        "activityStatus": "Tegevuse staatus",
        "online": "Võrgus",
        "offline": "Võrgust väljas",
        "away": "Eemal",
        "editProfile": "Muutke profiili",
        "saveChanges": "Salvestage muudatused",
        "cancel": "Tühistage",
        "logout": "Logige välja",
        "switchAccount": "Vahetage kontot",
        "changeLanguage": "Muutke keelt",
        "exitToHome": "Minge avalehele",
        "personalInfo": "Isiklikud andmed",
        "accountSettings": "Konto seaded",
        "security": "Turvalisus",
        "preferences": "Eelistused",
        "uploadPhoto": "Laadige üles foto",
        "changePassword": "Muutke parooli",
        "currentPassword": "Praegune parool",
        "newPassword": "Uus parool",
        "confirmPassword": "Kinnitage parool",
        "deleteAccount": "Kustutage konto",
        "notifications": "Teavitused",
        "privacy": "Privaatsusseaded",
        "help": "Abi ja tugi"
      }
    }
  },
  lv: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Atklājiet premium kvalitāti, piegādātu pie jūsu durvīm."
      },
      "login": {
        "title": "Laipni lūdzam atpakaļ",
        "subtitle": "Piesakieties, lai turpinātu izpētīt.",
        "email": "E-pasta adrese",
        "password": "Parole",
        "emailPlaceholder": "Ievadiet savu e-pastu",
        "passwordPlaceholder": "Ievadiet savu paroli",
        "button": "Piesakieties",
        "noAccount": "Nav konta? Reģistrējieties"
      },
      "nav": {
        "home": "Sākums",
        "store": "Veikals",
        "about": "Par mums",
        "profile": "Profils"
      },
      "pages": {
        "homeTitle": "Sākuma zona",
        "storeTitle": "Izceltie produkti",
        "aboutTitle": "Par zīmolu",
        "profileTitle": "Jūsu profils"
      },
      "profile": {
        "username": "Lietotājvārds",
        "email": "E-pasts",
        "age": "Vecums",
        "password": "Parole",
        "activityStatus": "Aktivitātes statuss",
        "online": "Tiešsaistē",
        "offline": "Bezsaistē",
        "away": "Prom",
        "editProfile": "Rediģēt profilu",
        "saveChanges": "Saglabāt izmaiņas",
        "cancel": "Atcelt",
        "logout": "Izrakstīties",
        "switchAccount": "Pārslēgt kontu",
        "changeLanguage": "Mainīt valodu",
        "exitToHome": "Doties uz sākumlapu",
        "personalInfo": "Personiskā informācija",
        "accountSettings": "Konta iestatījumi",
        "security": "Drošība",
        "preferences": "Iestatījumi",
        "uploadPhoto": "Augšupielādēt foto",
        "changePassword": "Mainīt paroli",
        "currentPassword": "Pašreizējā parole",
        "newPassword": "Jaunā parole",
        "confirmPassword": "Apstiprināt paroli",
        "deleteAccount": "Dzēst kontu",
        "notifications": "Paziņojumi",
        "privacy": "Privātuma iestatījumi",
        "help": "Palīdzība un atbalsts"
      }
    }
  },
  lt: {
    translation: {
      "app": {
        "name": "Aura Commerce",
        "tagline": "Atraskite premium kokybę, pristatytą prie jūsų durų."
      },
      "login": {
        "title": "Sveiki sugrįžę",
        "subtitle": "Prisijunkite, kad tęstumėte tyrinėjimą.",
        "email": "El. pašto adresas",
        "password": "Slaptažodis",
        "emailPlaceholder": "Įveskite savo el. paštą",
        "passwordPlaceholder": "Įveskite savo slaptažodį",
        "button": "Prisijungti",
        "noAccount": "Neturite paskyros? Registruokitės"
      },
      "nav": {
        "home": "Pagrindinis",
        "store": "Parduotuvė",
        "about": "Apie mus",
        "profile": "Profilis"
      },
      "pages": {
        "homeTitle": "Pagrindinė zona",
        "storeTitle": "Pasiūlyti produktai",
        "aboutTitle": "Apie prekės ženklą",
        "profileTitle": "Jūsų profilis"
      },
      "profile": {
        "username": "Vartotojo vardas",
        "email": "El. paštas",
        "age": "Amžius",
        "password": "Slaptažodis",
        "activityStatus": "Aktyvumo būsena",
        "online": "Prisijungęs",
        "offline": "Neprisijungęs",
        "away": "Toliau",
        "editProfile": "Redaguoti profilį",
        "saveChanges": "Išsaugoti pakeitimus",
        "cancel": "Atšaukti",
        "logout": "Atsijungti",
        "switchAccount": "Perjungti paskyrą",
        "changeLanguage": "Keisti kalbą",
        "exitToHome": "Grįžti į pagrindinį",
        "personalInfo": "Asmeninė informacija",
        "accountSettings": "Paskyros nustatymai",
        "security": "Saugumas",
        "preferences": "Nustatymai",
        "uploadPhoto": "Įkelti nuotrauką",
        "changePassword": "Keisti slaptažodį",
        "currentPassword": "Dabartinis slaptažodis",
        "newPassword": "Naujas slaptažodis",
        "confirmPassword": "Patvirtinti slaptažodį",
        "deleteAccount": "Ištrinti paskyrą",
        "notifications": "Pranešimai",
        "privacy": "Privatumo nustatymai",
        "help": "Pagalba ir palaikymas"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
