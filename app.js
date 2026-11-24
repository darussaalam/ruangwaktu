/* RuangWaktu 2011 Application Logic */

// Default seed data for initial visit
const INITIAL_USERS = [
  {
    id: "user_demo",
    username: "anak_warnet",
    password: "123",
    fullName: "Rizky 'Si Anak Warnet' Pratama",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Rizky&backgroundColor=b6e3f4",
    pinBb: "28B7CD31",
    bio: "Jempolers sejati pantang galau sebelum jam 12 malam.",
    relationship: "Hubungannya Rumit",
    school: "SMA Negeri 1 Jakarta (Angkatan 2011)",
    joined: "Maret 2011"
  }
];

const INITIAL_FRIENDS = [
  { id: "f1", name: "Rian 'Si Colekers'", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Rian&backgroundColor=c0aede", online: true, pin: "21A4FF90", status: "Aktif via BlackBerry®" },
  { id: "f2", name: "Citra Putri Anggraini", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Citra&backgroundColor=ffd5dc", online: true, pin: "2A7F89C1", status: "Lg dengerin Vierra" },
  { id: "f3", name: "Bayu NinjaSaga", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Bayu&backgroundColor=d1d4f9", online: true, pin: "25D890AA", status: "Mabar Ninja Saga yuk" },
  { id: "f4", name: "Dian 'Jempolers' Permata", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Dian&backgroundColor=ffdfbf", online: true, pin: "29E411B2", status: "Colek balik 3x no PHP" },
  { id: "f5", name: "Eko PointBlank", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Eko&backgroundColor=c0aede", online: false, pin: "238BCC45", status: "Off - istirahat" },
  { id: "f6", name: "Sarah Cantikzz", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sarah&backgroundColor=ffd5dc", online: true, pin: "28114400", status: "Online via Opera Mini" }
];

const INITIAL_FRIEND_REQUESTS = [
  { id: "req_1", friendId: "f_agus", name: "Agus 'Anak Skate'", mutual: 14, avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Agus&backgroundColor=ffd5dc", pin: "24C11899", status: "Online via BBM" },
  { id: "req_2", friendId: "f_nabila", name: "Nabila Cantikzz", mutual: 8, avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Nabila&backgroundColor=c0aede", pin: "27E43190", status: "Status: Galau bgt" }
];

const INITIAL_MESSAGE_THREADS = [
  { id: "mth_1", friendId: "f1", name: "Rian 'Si Colekers'", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Rian&backgroundColor=c0aede", snippet: "Wkwkwk jd ke warnet ga ntar mlm bro?", time: "10 menit lalu", unread: true },
  { id: "mth_2", friendId: "f2", name: "Citra Putri Anggraini", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Citra&backgroundColor=ffd5dc", snippet: "PING! PING! PING! Bales dong Yan..", time: "45 menit lalu", unread: true },
  { id: "mth_3", friendId: "f4", name: "Dian 'Jempolers' Permata", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Dian&backgroundColor=ffdfbf", snippet: "Sip gan, status lu udah gw like ya, like balik!", time: "2 jam lalu", unread: true }
];

const INITIAL_NOTIFICATIONS = [
  { id: "notif_1", text: "<strong>Dian 'Jempolers'</strong> menyukai status Anda: <em>\"Jgn lp mkn ciang yach kmu...\"</em>", time: "5 menit yang lalu", icon: "👍", unread: true, type: "like" },
  { id: "notif_2", text: "<strong>Citra Putri Anggraini</strong> mengomentari status Anda di Dinding.", time: "15 menit yang lalu", icon: "💬", unread: true, type: "comment" },
  { id: "notif_3", text: "<strong>Bayu NinjaSaga</strong> baru saja mencolek Anda!", time: "40 menit yang lalu", icon: "👉", unread: true, type: "poke", friendName: "Bayu NinjaSaga" },
  { id: "notif_4", text: "<strong>Rian 'Si Colekers'</strong> membagikan kiriman di grup <em>Barter PIN BB 2011</em>.", time: "1 jam yang lalu", icon: "👥", unread: true, type: "group" },
  { id: "notif_5", text: "<strong>Eko PointBlank</strong> mengirimkan 10 Energy di Ninja Saga.", time: "3 jam yang lalu", icon: "🥷", unread: true, type: "game" }
];

const INITIAL_POSTS = [
  {
    id: "post_1",
    authorId: "f1",
    authorName: "Rian 'Si Colekers'",
    authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Rian&backgroundColor=c0aede",
    timestamp: "18 menit yang lalu",
    device: "melalui BlackBerry® Smartphones",
    content: "Jgn lp mkn ciang yach kmu.. jgn telat nnti cakit wkwkwk >.< #galau #statusviaBlackBerry",
    pinBb: "21A4FF90",
    photo: "",
    likes: ["f2", "f4", "user_demo"],
    comments: [
      { id: "c1", author: "Citra Putri Anggraini", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Citra&backgroundColor=ffd5dc", text: "Alay bgt lu Yan ampun deh wkwk", time: "14 menit yang lalu" },
      { id: "c2", author: "Dian 'Jempolers' Permata", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Dian&backgroundColor=ffdfbf", text: "Udah gw like ya gan, colek balik dong status gw!", time: "10 menit yang lalu" }
    ]
  },
  {
    id: "post_2",
    authorId: "f2",
    authorName: "Citra Putri Anggraini",
    authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Citra&backgroundColor=ffd5dc",
    timestamp: "45 menit yang lalu",
    device: "melalui BlackBerry Bold 9700 Onyx",
    content: "Huft bosen bgt hr ini.. New PIN BB ya guys: 2A7F89C1, yg lama ke-wipe gara2 batere dicabut pas restart bb.. Invite yaa, no spam!!",
    pinBb: "2A7F89C1",
    photo: "",
    likes: ["f1", "f3", "f4", "f5"],
    comments: [
      { id: "c3", author: "Bayu NinjaSaga", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Bayu&backgroundColor=d1d4f9", text: "Udah gw invite ya Cit, accept dong", time: "30 menit yang lalu" }
    ]
  },
  {
    id: "post_3",
    authorId: "f3",
    authorName: "Bayu NinjaSaga",
    authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Bayu&backgroundColor=d1d4f9",
    timestamp: "2 jam yang lalu",
    device: "melalui Ninja Saga Game",
    content: "Ada yg mau temenan buat saling gift energy di Ninja Saga gak? Kurang 5 lagi nih mau lawan boss level 40! Comment ya ntar gw add back langsung.",
    pinBb: "",
    photo: "",
    likes: ["f1", "f5"],
    comments: [
      { id: "c4", author: "Eko PointBlank", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Eko&backgroundColor=c0aede", text: "Gw maen bro, ntar malem gw gift ya abis pulang sekolah.", time: "1 jam yang lalu" }
    ]
  },
  {
    id: "post_4",
    authorId: "f4",
    authorName: "Dian 'Jempolers' Permata",
    authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Dian&backgroundColor=ffdfbf",
    timestamp: "3 jam yang lalu",
    device: "melalui Facebook for Android",
    content: "Jempolmu semangatku.. Siapa yg like status ini nanti gw colek balik 3x + wall to wall! No PHP yaa.. Salam jempolers se-Indonesia!",
    pinBb: "29E411B2",
    photo: "",
    likes: ["f1", "f2", "f3", "f6"],
    comments: []
  }
];

const BOT_REPLIES = [
  "Wkwkwk iyee bro, ada apa nih?",
  "Lg ol di warnet nih sm anak-anak, ntar malem begadang wkwk",
  "Eh pin BB lu brp bro? Invite pin gw dong!",
  "Wkwk galau amat status lu barusan",
  "Lagi maen Ninja Saga nih bntr, jgn di-chat dlu ntar kalah duel",
  "Yoi bro siap, ntar gw like balik status lu ya!",
  "Wkwkwk mantap gan, salam jempolers!"
];

// Persistent state store
const Storage = {
  getUsers: () => JSON.parse(localStorage.getItem("rw_users")) || INITIAL_USERS,
  setUsers: (users) => localStorage.setItem("rw_users", JSON.stringify(users)),
  
  getCurrentUser: () => JSON.parse(localStorage.getItem("rw_current_user")),
  setCurrentUser: (user) => localStorage.setItem("rw_current_user", JSON.stringify(user)),
  removeCurrentUser: () => localStorage.removeItem("rw_current_user"),
  
  getPosts: () => JSON.parse(localStorage.getItem("rw_posts")) || INITIAL_POSTS,
  setPosts: (posts) => localStorage.setItem("rw_posts", JSON.stringify(posts)),
  
  getFriends: () => JSON.parse(localStorage.getItem("rw_friends")) || INITIAL_FRIENDS,
  setFriends: (friends) => localStorage.setItem("rw_friends", JSON.stringify(friends)),

  getFriendRequests: () => JSON.parse(localStorage.getItem("rw_friend_requests")) || INITIAL_FRIEND_REQUESTS,
  setFriendRequests: (reqs) => localStorage.setItem("rw_friend_requests", JSON.stringify(reqs)),

  getMessageThreads: () => JSON.parse(localStorage.getItem("rw_message_threads")) || INITIAL_MESSAGE_THREADS,
  setMessageThreads: (threads) => localStorage.setItem("rw_message_threads", JSON.stringify(threads)),

  getNotifications: () => JSON.parse(localStorage.getItem("rw_notifications")) || INITIAL_NOTIFICATIONS,
  setNotifications: (notifs) => localStorage.setItem("rw_notifications", JSON.stringify(notifs)),

  getPhotoUploadHistory: () => JSON.parse(localStorage.getItem("rw_photo_uploads")) || {},
  setPhotoUploadHistory: (hist) => localStorage.setItem("rw_photo_uploads", JSON.stringify(hist))
};

// Web Audio API retro pop tone synthesizer
function playChatNotificationSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.12);
    
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  } catch (err) {
    // Ignore audio autoplay restrictions
  }
}

// Active open chat windows tracking: { [friendId]: { friend, minimized: false, messages: [] } }
const activeChats = {};

// Application Controller
const App = {
  currentSelectedPhotoData: "",

  init() {
    this.cacheDom();
    this.bindEvents();
    this.checkSession();
  },

  cacheDom() {
    this.authPage = document.getElementById("authPage");
    this.mainApp = document.getElementById("mainApp");
    this.topHeader = document.getElementById("topHeader");
    
    // Auth elements
    this.loginForm = document.getElementById("loginForm");
    this.loginUsername = document.getElementById("loginUsername");
    this.loginPassword = document.getElementById("loginPassword");
    this.demoLoginBtn = document.getElementById("demoLoginBtn");
    this.registerForm = document.getElementById("registerForm");
    this.regFirstname = document.getElementById("regFirstname");
    this.regLastname = document.getElementById("regLastname");
    this.regUsername = document.getElementById("regUsername");
    this.regPassword = document.getElementById("regPassword");
    this.regGender = document.querySelectorAll('input[name="gender"]');
    
    // Feed and navigation
    this.feedContainer = document.getElementById("feedStream");
    this.composerForm = document.getElementById("composerForm");
    this.composerText = document.getElementById("composerText");
    this.composerDevice = document.getElementById("composerDevice");
    this.composerPinRow = document.getElementById("composerPinRow");
    this.composerPinInput = document.getElementById("composerPinInput");
    this.pinTabBtn = document.getElementById("pinTabBtn");
    this.statusTabBtn = document.getElementById("statusTabBtn");
    this.photoTabBtn = document.getElementById("photoTabBtn");

    // Photo upload elements
    this.composerPhotoRow = document.getElementById("composerPhotoRow");
    this.composerPhotoInput = document.getElementById("composerPhotoInput");
    this.photoStatusText = document.getElementById("photoStatusText");
    this.photoPreviewWrap = document.getElementById("photoPreviewWrap");
    this.photoPreviewImg = document.getElementById("photoPreviewImg");
    this.btnRemovePhoto = document.getElementById("btnRemovePhoto");
    
    // Header user info
    this.headerUserAvatar = document.getElementById("headerUserAvatar");
    this.headerUserName = document.getElementById("headerUserName");
    this.headerMenuBtn = document.getElementById("headerMenuBtn");
    this.headerMenu = document.getElementById("headerMenu");
    this.headerLogoutBtn = document.getElementById("headerLogoutBtn");
    this.headerSearchInput = document.getElementById("headerSearchInput");

    // Header flyout buttons and panels
    this.btnNotifFriends = document.getElementById("btnNotifFriends");
    this.flyoutFriends = document.getElementById("flyoutFriends");
    this.flyoutFriendsList = document.getElementById("flyoutFriendsList");
    this.badgeFriends = document.getElementById("badgeFriends");

    this.btnNotifMessages = document.getElementById("btnNotifMessages");
    this.flyoutMessages = document.getElementById("flyoutMessages");
    this.flyoutMessagesList = document.getElementById("flyoutMessagesList");
    this.badgeMessages = document.getElementById("badgeMessages");

    this.btnNotifGlobe = document.getElementById("btnNotifGlobe");
    this.flyoutGlobe = document.getElementById("flyoutGlobe");
    this.flyoutGlobeList = document.getElementById("flyoutGlobeList");
    this.badgeGlobe = document.getElementById("badgeGlobe");
    
    // Left column
    this.leftAvatar = document.getElementById("leftAvatar");
    this.leftUserName = document.getElementById("leftUserName");
    this.navFeed = document.getElementById("navFeed");
    this.navProfile = document.getElementById("navProfile");
    this.navMessages = document.getElementById("navMessages");
    
    // Views
    this.homeView = document.getElementById("homeView");
    this.profileView = document.getElementById("profileView");
    
    // Profile view elements
    this.profileAvatar = document.getElementById("profileAvatar");
    this.profileName = document.getElementById("profileName");
    this.profilePinText = document.getElementById("profilePinText");
    this.profileRelationship = document.getElementById("profileRelationship");
    this.profileSchool = document.getElementById("profileSchool");
    this.profileBio = document.getElementById("profileBio");
    this.profileJoined = document.getElementById("profileJoined");
    this.profileFeedStream = document.getElementById("profileFeedStream");

    // Sidebar Online Friends widget
    this.sidebarOnlineFriendsList = document.getElementById("sidebarOnlineFriendsList");
    this.sidebarOnlineCount = document.getElementById("sidebarOnlineCount");
    
    // Chat dock elements
    this.chatBarBtn = document.getElementById("chatBarBtn");
    this.chatSidebar = document.getElementById("chatSidebar");
    this.chatFriendsList = document.getElementById("chatFriendsList");
    this.chatWindowsContainer = document.getElementById("chatWindowsContainer");
    this.chatSearchFriend = document.getElementById("chatSearchFriend");
    
    // Modal & Toast
    this.modalOverlay = document.getElementById("modalOverlay");
    this.modalTitle = document.getElementById("modalTitle");
    this.modalBody = document.getElementById("modalBody");
    this.modalCloseBtn = document.getElementById("modalCloseBtn");
    this.toastNotice = document.getElementById("toastNotice");
  },

  bindEvents() {
    // Auth bindings
    this.loginForm.addEventListener("submit", (e) => this.handleLogin(e));
    this.demoLoginBtn.addEventListener("click", () => this.handleDemoLogin());
    this.registerForm.addEventListener("submit", (e) => this.handleRegister(e));
    this.headerLogoutBtn.addEventListener("click", () => this.handleLogout());

    // Navigation and menu
    this.headerMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.closeAllFlyouts();
      this.headerMenu.classList.toggle("active");
    });

    // Flyout buttons click bindings
    this.btnNotifFriends.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = this.flyoutFriends.classList.contains("active");
      this.closeAllFlyouts();
      if (!isActive) {
        this.renderFlyoutFriends();
        this.flyoutFriends.classList.add("active");
      }
    });

    this.btnNotifMessages.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = this.flyoutMessages.classList.contains("active");
      this.closeAllFlyouts();
      if (!isActive) {
        this.renderFlyoutMessages();
        this.flyoutMessages.classList.add("active");
      }
    });

    this.btnNotifGlobe.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = this.flyoutGlobe.classList.contains("active");
      this.closeAllFlyouts();
      if (!isActive) {
        this.renderFlyoutGlobe();
        this.flyoutGlobe.classList.add("active");
      }
    });

    // Close flyouts on click outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".header-icon-wrap") && !e.target.closest("#headerMenuBtn")) {
        this.closeAllFlyouts();
      }
    });
    
    document.getElementById("brandLogo").addEventListener("click", (e) => {
      e.preventDefault();
      this.showHomeView();
    });
    this.navFeed.addEventListener("click", (e) => {
      e.preventDefault();
      this.showHomeView();
    });
    document.getElementById("headerHomeLink").addEventListener("click", (e) => {
      e.preventDefault();
      this.showHomeView();
    });
    document.getElementById("headerProfileLink").addEventListener("click", (e) => {
      e.preventDefault();
      this.showProfileView();
    });
    this.navProfile.addEventListener("click", (e) => {
      e.preventDefault();
      this.showProfileView();
    });
    document.getElementById("leftEditProfile").addEventListener("click", (e) => {
      e.preventDefault();
      this.showProfileView();
    });
    
    // Search
    this.headerSearchInput.addEventListener("input", (e) => this.handleSearch(e.target.value));
    
    // Composer tab toggles
    this.statusTabBtn.addEventListener("click", () => {
      this.statusTabBtn.classList.add("active");
      this.pinTabBtn.classList.remove("active");
      this.photoTabBtn.classList.remove("active");
      this.composerPinRow.classList.remove("visible");
      this.composerPhotoRow.style.display = "none";
      this.composerText.placeholder = "Apa yang sedang Anda pikirkan?";
    });

    this.pinTabBtn.addEventListener("click", () => {
      this.pinTabBtn.classList.add("active");
      this.statusTabBtn.classList.remove("active");
      this.photoTabBtn.classList.remove("active");
      this.composerPinRow.classList.add("visible");
      this.composerPhotoRow.style.display = "none";
      this.composerText.placeholder = "Contoh: Invite PIN BB baru gue ya, baru ganti Onyx.. No spam!";
      const user = Storage.getCurrentUser();
      if (user && user.pinBb) {
        this.composerPinInput.value = user.pinBb;
      }
    });

    this.photoTabBtn.addEventListener("click", () => {
      this.photoTabBtn.classList.add("active");
      this.statusTabBtn.classList.remove("active");
      this.pinTabBtn.classList.remove("active");
      this.composerPinRow.classList.remove("visible");
      this.composerPhotoRow.style.display = "block";
      this.composerText.placeholder = "Tuliskan keterangan untuk foto Anda...";
    });

    // Photo input change handler with 1-photo-per-day enforcement
    this.composerPhotoInput.addEventListener("change", (e) => this.handlePhotoSelection(e));
    this.btnRemovePhoto.addEventListener("click", () => this.handleRemoveSelectedPhoto());

    this.composerForm.addEventListener("submit", (e) => this.handleCreatePost(e));

    // Chat dock toggle
    this.chatBarBtn.addEventListener("click", () => {
      this.chatSidebar.classList.toggle("open");
    });
    this.chatSearchFriend.addEventListener("input", (e) => this.filterChatFriends(e.target.value));

    // Modal close
    this.modalCloseBtn.addEventListener("click", () => {
      this.modalOverlay.classList.remove("active");
    });
    this.modalOverlay.addEventListener("click", (e) => {
      if (e.target === this.modalOverlay) {
        this.modalOverlay.classList.remove("active");
      }
    });

    // Retro games click handlers
    document.getElementById("gameNinjaSaga").addEventListener("click", (e) => {
      e.preventDefault();
      this.showNostalgiaModal(
        "Ninja Saga (2011)",
        `<p style="margin-bottom:8px;"><strong>Status Game:</strong> Terhubung ke Server Lembah Ninja.</p>
         <p style="margin-bottom:8px;">Darah (HP): 1500 / 1500 | Chakra: 800 / 800 | Energy: 35/50</p>
         <p style="margin-bottom:12px;">Selamat datang kembali, Genin! Saling kirim gift energy ke teman-teman Anda untuk melawan Hunting House Boss level 40.</p>
         <button class="btn-classic-share" onclick="App.showToast('Energy gift berhasil dikirim ke semua teman online!')">Kirim 10 Energy ke Teman</button>`
      );
    });

    document.getElementById("gameFarmVille").addEventListener("click", (e) => {
      e.preventDefault();
      this.showNostalgiaModal(
        "FarmVille Classic (2011)",
        `<p style="margin-bottom:8px;"><strong>Kebun Anda:</strong> Siap dipanen!</p>
         <p style="margin-bottom:8px;">Padi: 24 petak matang | Tomat: 12 petak matang</p>
         <p style="margin-bottom:12px;">Jangan lupa panen sebelum tanaman Anda layu dalam 4 jam ke depan.</p>
         <button class="btn-classic-share" onclick="App.showToast('Semua tanaman padi & tomat berhasil dipanen! +250 XP')">Panen Semua</button>`
      );
    });

    document.getElementById("navColek").addEventListener("click", (e) => {
      e.preventDefault();
      this.showNostalgiaModal(
        "Pusat Colekan (Pokes)",
        `<p style="margin-bottom:8px;">👉 <strong>Citra Putri Anggraini</strong> baru saja mencolek Anda 5 menit yang lalu!</p>
         <button class="btn-classic-share" style="margin-bottom:12px;" onclick="App.showToast('Anda telah mencolek balik Citra Putri Anggraini!'); App.modalOverlay.classList.remove('active');">Colek Balik</button>
         <hr style="border:none;border-top:1px solid #ddd;margin:10px 0;">
         <p style="margin-bottom:8px;">👉 <strong>Dian 'Jempolers'</strong> mencolek Anda kemarin.</p>
         <button class="btn-classic-share" onclick="App.showToast('Anda telah mencolek balik Dian!'); App.modalOverlay.classList.remove('active');">Colek Balik</button>`
      );
    });
  },

  closeAllFlyouts() {
    this.flyoutFriends.classList.remove("active");
    this.flyoutMessages.classList.remove("active");
    this.flyoutGlobe.classList.remove("active");
    this.headerMenu.classList.remove("active");
  },

  checkSession() {
    const user = Storage.getCurrentUser();
    if (user) {
      this.renderAppForUser(user);
    } else {
      this.renderGuestView();
    }
  },

  renderGuestView() {
    this.authPage.style.display = "block";
    this.mainApp.style.display = "none";
    this.topHeader.style.display = "none";
  },

  renderAppForUser(user) {
    this.authPage.style.display = "none";
    this.mainApp.style.display = "flex";
    this.topHeader.style.display = "block";

    // Update UI elements with user data
    this.headerUserName.textContent = user.fullName.split(" ")[0];
    this.headerUserAvatar.src = user.avatar;
    this.leftUserName.textContent = user.fullName;
    this.leftAvatar.src = user.avatar;

    // BBM status announcement
    const bbmPinDisplay = document.getElementById("bbmPinDisplay");
    if (bbmPinDisplay) {
      bbmPinDisplay.textContent = user.pinBb || "28B7CD31";
    }

    this.renderPosts();
    this.renderChatFriends();
    this.renderSidebarOnlineFriends();
    this.updateNotificationBadges();
    this.renderProfileData(user);
    this.showHomeView();
  },

  // Notification badges updater
  updateNotificationBadges() {
    const requests = Storage.getFriendRequests();
    const threads = Storage.getMessageThreads();
    const notifs = Storage.getNotifications();

    const unreadMsgs = threads.filter(t => t.unread).length;
    const unreadNotifs = notifs.filter(n => n.unread).length;

    this.badgeFriends.textContent = requests.length;
    this.badgeFriends.style.display = requests.length > 0 ? "inline-block" : "none";

    this.badgeMessages.textContent = unreadMsgs;
    this.badgeMessages.style.display = unreadMsgs > 0 ? "inline-block" : "none";

    this.badgeGlobe.textContent = unreadNotifs;
    this.badgeGlobe.style.display = unreadNotifs > 0 ? "inline-block" : "none";
  },

  // 1. Friend Requests Flyout
  renderFlyoutFriends() {
    const requests = Storage.getFriendRequests();
    this.flyoutFriendsList.innerHTML = "";

    if (requests.length === 0) {
      this.flyoutFriendsList.innerHTML = `<div style="padding:16px;text-align:center;color:#666;">Tidak ada permintaan pertemanan baru.</div>`;
      return;
    }

    requests.forEach(req => {
      const item = document.createElement("div");
      item.className = "flyout-item";
      item.innerHTML = `
        <img class="flyout-item-avatar" src="${req.avatar}" alt="${req.name}" />
        <div class="flyout-item-body">
          <div class="flyout-item-title"><strong>${this.escapeHtml(req.name)}</strong></div>
          <div class="flyout-item-time">${req.mutual} teman yang sama</div>
          <div class="flyout-btn-row">
            <button class="btn-confirm-friend" onclick="App.confirmFriendRequest('${req.id}')">Konfirmasi</button>
            <button class="btn-remove-request" onclick="App.removeFriendRequest('${req.id}')">Hapus Permintaan</button>
          </div>
        </div>
      `;
      this.flyoutFriendsList.appendChild(item);
    });
  },

  confirmFriendRequest(reqId) {
    const requests = Storage.getFriendRequests();
    const req = requests.find(r => r.id === reqId);
    if (!req) return;

    // Add to friends list
    const friends = Storage.getFriends();
    friends.unshift({
      id: "f_" + Date.now(),
      name: req.name,
      avatar: req.avatar,
      online: true,
      pin: req.pin,
      status: req.status || "Aktif via RuangWaktu"
    });
    Storage.setFriends(friends);

    // Remove from requests
    const updatedReqs = requests.filter(r => r.id !== reqId);
    Storage.setFriendRequests(updatedReqs);

    this.updateNotificationBadges();
    this.renderFlyoutFriends();
    this.renderChatFriends();
    this.renderSidebarOnlineFriends();
    playChatNotificationSound();
    this.showToast(`Anda sekarang berteman dengan ${req.name}!`);
  },

  removeFriendRequest(reqId) {
    const requests = Storage.getFriendRequests().filter(r => r.id !== reqId);
    Storage.setFriendRequests(requests);
    this.updateNotificationBadges();
    this.renderFlyoutFriends();
  },

  // 2. Messages Flyout
  renderFlyoutMessages() {
    const threads = Storage.getMessageThreads();
    this.flyoutMessagesList.innerHTML = "";

    if (threads.length === 0) {
      this.flyoutMessagesList.innerHTML = `<div style="padding:16px;text-align:center;color:#666;">Kotak masuk Anda kosong.</div>`;
      return;
    }

    threads.forEach(th => {
      const item = document.createElement("div");
      item.className = `flyout-item ${th.unread ? 'unread' : ''}`;
      item.onclick = () => this.handleOpenMessageThread(th.id);
      item.innerHTML = `
        <img class="flyout-item-avatar" src="${th.avatar}" alt="${th.name}" />
        <div class="flyout-item-body">
          <div class="flyout-item-title">
            <span style="color:#3b5998;font-weight:bold;">${this.escapeHtml(th.name)}</span>
          </div>
          <div style="font-size:11px;color:#444;margin-top:2px;">${this.escapeHtml(th.snippet)}</div>
          <div class="flyout-item-time">${th.time}</div>
        </div>
      `;
      this.flyoutMessagesList.appendChild(item);
    });
  },

  handleOpenMessageThread(threadId) {
    const threads = Storage.getMessageThreads();
    const th = threads.find(t => t.id === threadId);
    if (!th) return;

    th.unread = false;
    Storage.setMessageThreads(threads);
    this.updateNotificationBadges();
    this.closeAllFlyouts();

    // Find or create friend object
    let friends = Storage.getFriends();
    let friend = friends.find(f => f.id === th.friendId || f.name === th.name);
    if (!friend) {
      friend = {
        id: th.friendId,
        name: th.name,
        avatar: th.avatar,
        online: true,
        status: "Aktif di obrolan"
      };
    }

    this.openChatWindow(friend);
  },

  openNewMessagePrompt() {
    this.closeAllFlyouts();
    const friends = Storage.getFriends();
    if (friends.length > 0) {
      this.openChatWindow(friends[0]);
    }
  },

  // 3. Globe Notifications Flyout
  renderFlyoutGlobe() {
    const notifs = Storage.getNotifications();
    this.flyoutGlobeList.innerHTML = "";

    if (notifs.length === 0) {
      this.flyoutGlobeList.innerHTML = `<div style="padding:16px;text-align:center;color:#666;">Tidak ada pemberitahuan baru.</div>`;
      return;
    }

    notifs.forEach(n => {
      const item = document.createElement("div");
      item.className = `flyout-item ${n.unread ? 'unread' : ''}`;
      item.onclick = () => this.handleNotificationClick(n.id);
      item.innerHTML = `
        <div style="font-size:18px;width:32px;text-align:center;flex-shrink:0;">${n.icon}</div>
        <div class="flyout-item-body">
          <div class="flyout-item-title">${n.text}</div>
          <div class="flyout-item-time">${n.time}</div>
          ${n.canPokeBack ? `
            <button class="btn-classic-share" style="margin-top:4px;padding:2px 6px;font-size:10px;" onclick="event.stopPropagation(); App.pokeFriend('${n.friendName}');">Colek Balik</button>
          ` : ''}
        </div>
      `;
      this.flyoutGlobeList.appendChild(item);
    });
  },

  handleNotificationClick(notifId) {
    const notifs = Storage.getNotifications();
    const n = notifs.find(item => item.id === notifId);
    if (n) {
      n.unread = false;
      Storage.setNotifications(notifs);
      this.updateNotificationBadges();
      this.renderFlyoutGlobe();
    }
  },

  markAllNotificationsRead() {
    const notifs = Storage.getNotifications();
    notifs.forEach(n => n.unread = false);
    Storage.setNotifications(notifs);
    this.updateNotificationBadges();
    this.renderFlyoutGlobe();
    this.showToast("Semua pemberitahuan ditandai telah dibaca.");
  },

  // Right Sidebar Online Friends Widget
  renderSidebarOnlineFriends() {
    const friends = Storage.getFriends();
    const onlineFriends = friends.filter(f => f.online);

    this.sidebarOnlineFriendsList.innerHTML = "";
    this.sidebarOnlineCount.textContent = onlineFriends.length;

    if (onlineFriends.length === 0) {
      this.sidebarOnlineFriendsList.innerHTML = `<div style="color:#777;font-size:10px;padding:6px 0;">Tidak ada teman yang sedang online saat ini.</div>`;
      return;
    }

    onlineFriends.forEach(friend => {
      const row = document.createElement("div");
      row.className = "sidebar-friend-row";
      row.onclick = () => this.openChatWindow(friend);
      row.innerHTML = `
        <div class="sidebar-friend-left">
          <img src="${friend.avatar}" class="sidebar-friend-avatar" alt="${friend.name}" />
          <div class="sidebar-friend-info">
            <span class="sidebar-friend-name">${this.escapeHtml(friend.name)}</span>
            <span class="sidebar-friend-sub">${this.escapeHtml(friend.status)}</span>
          </div>
        </div>
        <span class="chat-online-dot"></span>
      `;
      this.sidebarOnlineFriendsList.appendChild(row);
    });
  },

  // Status Photo Upload with 1-Photo-per-Day Limit
  handlePhotoSelection(e) {
    const file = e.target.files[0];
    if (!file) return;

    const currentUser = Storage.getCurrentUser();
    if (!currentUser) return;

    const today = new Date().toISOString().slice(0, 10);
    const history = Storage.getPhotoUploadHistory();

    // Check if user has already uploaded a photo today
    if (history[currentUser.id] === today) {
      this.showNostalgiaModal(
        "⚠️ Batas Kuota Foto Tercapai (1 Hari 1 Foto)",
        `<p style="margin-bottom:8px;">Maaf! Anda sudah mengunggah <strong>1 foto hari ini</strong>.</p>
         <p style="margin-bottom:8px;">Sesuai ketentuan hemat kuota internet era Facebook 2011, setiap akun memiliki batas <strong>maksimal 1 foto per hari</strong>.</p>
         <p style="color:#666;font-size:11px;">Silakan unggah foto baru lagi besok. Anda tetap dapat membagikan status teks atau PIN BBM kapan saja tanpa batasan.</p>`
      );
      this.composerPhotoInput.value = "";
      this.handleRemoveSelectedPhoto();
      return;
    }

    // Read and preview file
    const reader = new FileReader();
    reader.onload = (event) => {
      this.currentSelectedPhotoData = event.target.result;
      this.photoPreviewImg.src = this.currentSelectedPhotoData;
      this.photoPreviewWrap.style.display = "flex";
      this.photoStatusText.textContent = `${file.name} (Siap diunggah - 1/1 foto hari ini)`;
    };
    reader.readAsDataURL(file);
  },

  handleRemoveSelectedPhoto() {
    this.currentSelectedPhotoData = "";
    this.composerPhotoInput.value = "";
    this.photoPreviewImg.src = "";
    this.photoPreviewWrap.style.display = "none";
    this.photoStatusText.textContent = "Belum ada foto yang dipilih";
  },

  openPhotoModal(photoUrl) {
    this.showNostalgiaModal(
      "Lihat Foto Penuh (RuangWaktu 2011)",
      `<div style="text-align:center;">
         <img src="${photoUrl}" style="max-width:100%;max-height:480px;border:1px solid #ccc;padding:2px;background:#fff;" alt="Foto" />
       </div>`
    );
  },

  // Auth Handlers
  handleLogin(e) {
    e.preventDefault();
    const username = this.loginUsername.value.trim().toLowerCase();
    const password = this.loginPassword.value;

    const users = Storage.getUsers();
    const found = users.find(u => u.username.toLowerCase() === username && u.password === password);

    if (found) {
      Storage.setCurrentUser(found);
      this.renderAppForUser(found);
      this.showToast(`Selamat datang kembali, ${found.fullName}!`);
    } else {
      alert("Username atau kata sandi tidak cocok. Silakan periksa kembali atau gunakan tombol 'Akun Demo'.");
    }
  },

  handleDemoLogin() {
    const demoUser = INITIAL_USERS[0];
    const users = Storage.getUsers();
    if (!users.some(u => u.username === demoUser.username)) {
      users.push(demoUser);
      Storage.setUsers(users);
    }
    Storage.setCurrentUser(demoUser);
    this.renderAppForUser(demoUser);
    this.showToast("Berhasil masuk menggunakan Akun Demo!");
  },

  handleRegister(e) {
    e.preventDefault();
    const firstName = this.regFirstname.value.trim();
    const lastName = this.regLastname.value.trim();
    const username = this.regUsername.value.trim().toLowerCase();
    const password = this.regPassword.value;

    if (!username || !password || !firstName) {
      alert("Harap lengkapi nama, username, dan kata sandi.");
      return;
    }

    const users = Storage.getUsers();
    if (users.some(u => u.username === username)) {
      alert("Username sudah digunakan. Silakan pilih username lain.");
      return;
    }

    const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0');
    const randomPin = `28${hex}`;

    const newUser = {
      id: "user_" + Date.now(),
      username: username,
      password: password,
      fullName: lastName ? `${firstName} ${lastName}` : firstName,
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(username)}&backgroundColor=b6e3f4`,
      pinBb: randomPin,
      bio: "Pengguna baru RuangWaktu 2011.",
      relationship: "Lajang",
      school: "Alumni SMA 2011",
      joined: "November 2011"
    };

    users.push(newUser);
    Storage.setUsers(users);
    Storage.setCurrentUser(newUser);
    this.renderAppForUser(newUser);
    this.showToast(`Akun berhasil dibuat! PIN BB Anda: ${randomPin}`);
  },

  handleLogout() {
    Storage.removeCurrentUser();
    this.renderGuestView();
    this.showToast("Anda telah keluar dari RuangWaktu.");
  },

  showHomeView() {
    this.homeView.style.display = "block";
    this.profileView.classList.remove("active");
    this.navFeed.parentElement.classList.add("active");
    this.navProfile.parentElement.classList.remove("active");
  },

  showProfileView() {
    this.homeView.style.display = "none";
    this.profileView.classList.add("active");
    this.navFeed.parentElement.classList.remove("active");
    this.navProfile.parentElement.classList.add("active");
    
    const user = Storage.getCurrentUser();
    this.renderProfileData(user);
    this.renderProfilePosts(user.id);
  },

  renderProfileData(user) {
    this.profileAvatar.src = user.avatar;
    this.profileName.textContent = user.fullName;
    this.profilePinText.textContent = user.pinBb || "Belum ada PIN";
    this.profileRelationship.textContent = user.relationship || "Lajang";
    this.profileSchool.textContent = user.school || "-";
    this.profileBio.textContent = user.bio || "Menikmati nostalgia internet 2011.";
    this.profileJoined.textContent = user.joined || "2011";
  },

  handleCreatePost(e) {
    e.preventDefault();
    const content = this.composerText.value.trim();
    const hasPhoto = !!this.currentSelectedPhotoData;

    if (!content && !hasPhoto) return;

    const currentUser = Storage.getCurrentUser();
    const device = this.composerDevice.value;
    const pinVal = this.composerPinRow.classList.contains("visible") 
      ? this.composerPinInput.value.trim() 
      : "";

    // Save photo upload date restriction if photo is uploaded
    if (hasPhoto) {
      const today = new Date().toISOString().slice(0, 10);
      const history = Storage.getPhotoUploadHistory();
      history[currentUser.id] = today;
      Storage.setPhotoUploadHistory(history);
    }

    const newPost = {
      id: "post_" + Date.now(),
      authorId: currentUser.id,
      authorName: currentUser.fullName,
      authorAvatar: currentUser.avatar,
      timestamp: "Baru saja",
      device: device,
      content: content,
      pinBb: pinVal,
      photo: this.currentSelectedPhotoData || "",
      likes: [],
      comments: []
    };

    const posts = Storage.getPosts();
    posts.unshift(newPost);
    Storage.setPosts(posts);

    this.composerText.value = "";
    this.handleRemoveSelectedPhoto();
    this.renderPosts();
    this.showToast(hasPhoto ? "Status beserta foto berhasil diterbitkan! (Kuota hari ini terpakai: 1/1)" : "Status Anda berhasil diterbitkan!");

    // Simulate auto-like from one nostalgic friend
    setTimeout(() => {
      const updated = Storage.getPosts();
      const target = updated.find(p => p.id === newPost.id);
      if (target && !target.likes.includes("f4")) {
        target.likes.push("f4");
        target.comments.push({
          id: "c_auto_" + Date.now(),
          author: "Dian 'Jempolers' Permata",
          avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Dian&backgroundColor=ffdfbf",
          text: "Like meluncur gan! Colek balik jgn lupa yaa :D",
          time: "Baru saja"
        });
        Storage.setPosts(updated);
        App.renderPosts();
        playChatNotificationSound();
      }
    }, 4000);
  },

  renderPosts(filterQuery = "") {
    const posts = Storage.getPosts();
    const currentUser = Storage.getCurrentUser();

    const filtered = filterQuery 
      ? posts.filter(p => p.content.toLowerCase().includes(filterQuery.toLowerCase()) || p.authorName.toLowerCase().includes(filterQuery.toLowerCase()))
      : posts;

    this.feedContainer.innerHTML = "";

    if (filtered.length === 0) {
      this.feedContainer.innerHTML = `<div class="feed-card" style="text-align:center;color:#666;padding:20px;">Tidak ada status yang cocok dengan pencarian Anda.</div>`;
      return;
    }

    filtered.forEach(post => {
      const isLiked = currentUser && post.likes.includes(currentUser.id);
      const likesCount = post.likes.length;

      const card = document.createElement("div");
      card.className = "feed-card";
      card.innerHTML = `
        <div class="feed-card-header">
          <img class="feed-avatar" src="${post.authorAvatar}" alt="${post.authorName}" />
          <div class="feed-meta">
            <a class="feed-author-name" href="#">${post.authorName}</a>
            <div class="feed-timestamp">
              ${post.timestamp} · <span class="feed-device-tag">${post.device}</span>
            </div>
          </div>
        </div>
        <div class="feed-content">${this.escapeHtml(post.content)}</div>
        ${post.photo ? `
          <div class="feed-photo-container">
            <img src="${post.photo}" class="feed-photo-image" alt="Foto status" onclick="App.openPhotoModal('${post.photo}')" />
          </div>
        ` : ''}
        ${post.pinBb ? `
          <div class="feed-bbm-pin-box">
            <span>📱 <strong>PIN BBM:</strong> <span style="font-family:monospace;font-weight:bold;">${this.escapeHtml(post.pinBb)}</span></span>
            <button class="btn-copy-pin" onclick="App.copyToClipboard('${this.escapeHtml(post.pinBb)}')">Salin PIN</button>
          </div>
        ` : ''}
        <div class="feed-actions">
          <span class="feed-action-link ${isLiked ? 'liked' : ''}" onclick="App.toggleLike('${post.id}')">${isLiked ? 'Batal Suka' : 'Suka'}</span>
          <span>·</span>
          <span class="feed-action-link" onclick="document.getElementById('comment-input-${post.id}').focus()">Komentari</span>
          <span>·</span>
          <span class="feed-action-link" onclick="App.showToast('Status berhasil dibagikan ke Dinding Anda!')">Bagikan</span>
          <span>·</span>
          <span class="feed-action-link" onclick="App.pokeFriend('${post.authorName}')">Colek</span>
        </div>
        <div class="feed-social-container">
          ${likesCount > 0 ? `
            <div class="feed-likes-count">
              <svg class="icon-thumb-like" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
              <span>${likesCount} orang menyukai status ini.</span>
            </div>
          ` : ''}
          <div class="comments-list">
            ${post.comments.map(c => `
              <div class="comment-item">
                <img class="comment-avatar" src="${c.avatar}" alt="${c.author}" />
                <div class="comment-body">
                  <span class="comment-author">${this.escapeHtml(c.author)}</span>
                  <span class="comment-text">${this.escapeHtml(c.text)}</span>
                  <div class="comment-time">${c.time}</div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="comment-input-box">
            <input type="text" class="comment-input-field" id="comment-input-${post.id}" placeholder="Tulis komentar..." onkeydown="if(event.key==='Enter') App.addComment('${post.id}', this)" />
            <button class="btn-comment-submit" onclick="App.addComment('${post.id}', document.getElementById('comment-input-${post.id}'))">Kirim</button>
          </div>
        </div>
      `;
      this.feedContainer.appendChild(card);
    });
  },

  renderProfilePosts(userId) {
    const posts = Storage.getPosts();
    const userPosts = posts.filter(p => p.authorId === userId);
    this.profileFeedStream.innerHTML = "";

    if (userPosts.length === 0) {
      this.profileFeedStream.innerHTML = `<div class="feed-card" style="text-align:center;color:#666;padding:20px;">Anda belum memposting status di Dinding profil Anda.</div>`;
      return;
    }

    userPosts.forEach(post => {
      const card = document.createElement("div");
      card.className = "feed-card";
      card.innerHTML = `
        <div class="feed-card-header">
          <img class="feed-avatar" src="${post.authorAvatar}" alt="${post.authorName}" />
          <div class="feed-meta">
            <a class="feed-author-name" href="#">${post.authorName}</a>
            <div class="feed-timestamp">${post.timestamp} · ${post.device}</div>
          </div>
        </div>
        <div class="feed-content">${this.escapeHtml(post.content)}</div>
        ${post.photo ? `
          <div class="feed-photo-container">
            <img src="${post.photo}" class="feed-photo-image" alt="Foto status" onclick="App.openPhotoModal('${post.photo}')" />
          </div>
        ` : ''}
      `;
      this.profileFeedStream.appendChild(card);
    });
  },

  toggleLike(postId) {
    const currentUser = Storage.getCurrentUser();
    if (!currentUser) return;

    const posts = Storage.getPosts();
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    const idx = post.likes.indexOf(currentUser.id);
    if (idx >= 0) {
      post.likes.splice(idx, 1);
    } else {
      post.likes.push(currentUser.id);
    }

    Storage.setPosts(posts);
    this.renderPosts();
  },

  addComment(postId, inputEl) {
    const text = inputEl.value.trim();
    if (!text) return;

    const currentUser = Storage.getCurrentUser();
    if (!currentUser) return;

    const posts = Storage.getPosts();
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    post.comments.push({
      id: "c_" + Date.now(),
      author: currentUser.fullName,
      avatar: currentUser.avatar,
      text: text,
      time: "Baru saja"
    });

    Storage.setPosts(posts);
    inputEl.value = "";
    this.renderPosts();
  },

  pokeFriend(friendName) {
    this.showToast(`👉 Anda berhasil mencolek ${friendName}! Tunggu balasan colekan di Dinding.`);
  },

  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      this.showToast(`PIN BBM ${text} berhasil disalin ke clipboard!`);
    }).catch(() => {
      this.showToast(`PIN BBM: ${text}`);
    });
  },

  handleSearch(query) {
    this.renderPosts(query.trim());
  },

  // Classic Chat System
  renderChatFriends(filter = "") {
    const friends = Storage.getFriends();
    const filtered = filter 
      ? friends.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()))
      : friends;

    this.chatFriendsList.innerHTML = "";
    filtered.forEach(friend => {
      const li = document.createElement("li");
      li.className = "chat-friend-item";
      li.onclick = () => this.openChatWindow(friend);
      li.innerHTML = `
        <div class="chat-friend-left">
          <img class="chat-friend-avatar" src="${friend.avatar}" alt="${friend.name}" />
          <span>${friend.name}</span>
        </div>
        <span class="chat-online-dot" style="${friend.online ? '' : 'background:#aaa;box-shadow:none;'}"></span>
      `;
      this.chatFriendsList.appendChild(li);
    });

    const onlineCount = friends.filter(f => f.online).length;
    document.getElementById("chatOnlineCount").textContent = onlineCount;
  },

  filterChatFriends(val) {
    this.renderChatFriends(val.trim());
  },

  openChatWindow(friend) {
    if (!activeChats[friend.id]) {
      activeChats[friend.id] = {
        friend: friend,
        minimized: false,
        messages: [
          { sender: "them", text: `Halo! Ini ${friend.name}. ${friend.status}` }
        ]
      };
    }
    activeChats[friend.id].minimized = false;
    this.renderChatWindows();
  },

  renderChatWindows() {
    this.chatWindowsContainer.innerHTML = "";

    Object.keys(activeChats).forEach(friendId => {
      const chat = activeChats[friendId];
      const win = document.createElement("div");
      win.className = `chat-window ${chat.minimized ? 'minimized' : ''}`;
      win.id = `chat_win_${friendId}`;

      win.innerHTML = `
        <div class="chat-window-header" onclick="App.toggleChatMinimize('${friendId}')">
          <div style="display:flex;align-items:center;gap:5px;">
            <span class="chat-online-dot"></span>
            <span>${chat.friend.name}</span>
          </div>
          <div class="chat-window-controls" onclick="event.stopPropagation();">
            <button class="chat-window-btn" onclick="App.toggleChatMinimize('${friendId}')">${chat.minimized ? '▲' : '─'}</button>
            <button class="chat-window-btn" onclick="App.closeChatWindow('${friendId}')">✕</button>
          </div>
        </div>
        <div class="chat-messages-area" id="msg_area_${friendId}">
          ${chat.messages.map(m => `
            <div class="chat-msg ${m.sender}">${this.escapeHtml(m.text)}</div>
          `).join('')}
        </div>
        <div class="chat-input-row">
          <input type="text" class="chat-input-text" id="chat_input_${friendId}" placeholder="Tulis pesan..." onkeydown="if(event.key==='Enter') App.sendChatMessage('${friendId}')" />
        </div>
      `;

      this.chatWindowsContainer.appendChild(win);

      // Auto scroll to bottom
      const area = win.querySelector(".chat-messages-area");
      if (area) {
        area.scrollTop = area.scrollHeight;
      }
    });
  },

  toggleChatMinimize(friendId) {
    if (activeChats[friendId]) {
      activeChats[friendId].minimized = !activeChats[friendId].minimized;
      this.renderChatWindows();
    }
  },

  closeChatWindow(friendId) {
    delete activeChats[friendId];
    this.renderChatWindows();
  },

  sendChatMessage(friendId) {
    const input = document.getElementById(`chat_input_${friendId}`);
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    const chat = activeChats[friendId];
    if (!chat) return;

    chat.messages.push({ sender: "me", text: text });
    input.value = "";
    this.renderChatWindows();

    // Simulated retro reply after 1.2s
    setTimeout(() => {
      const replyText = BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)];
      chat.messages.push({ sender: "them", text: replyText });
      playChatNotificationSound();
      App.renderChatWindows();
    }, 1200);
  },

  // Modal and Toast Helpers
  showNostalgiaModal(title, contentHtml) {
    this.modalTitle.textContent = title;
    this.modalBody.innerHTML = contentHtml;
    this.modalOverlay.classList.add("active");
  },

  showToast(msg) {
    this.toastNotice.textContent = msg;
    this.toastNotice.classList.add("visible");
    setTimeout(() => {
      this.toastNotice.classList.remove("visible");
    }, 3500);
  },

  escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
