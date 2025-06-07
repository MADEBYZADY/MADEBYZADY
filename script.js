const LINK_STORE = {
    'Personal IG.url': 'https://instagram.com/zady03',
    'Projects IG.url': 'https://instagram.com/madebyzady',
    'Photography IG.url': 'https://instagram.com/shotbyzady',
    'Pinterest ZADY.url': 'https://pinterest.com/madebyzady',
    'Discord ZADY.url': 'https://discord.com/users/231083161025642496',
    'Reddit ZADY.url': 'https://reddit.com/user/zAdy03',
    'TikTok ZADY.url': 'https://tiktok.com/@madebyzady',
    'Spotify ZADY.url': 'https://open.spotify.com/user/f6zj7qtlusdwiccyua4foged4',
    'Youtube ZADY.url': 'https://youtube.com/@madebyzady',
    'Facebook ZADY.url': 'https://facebook.com/madebyzady',
    'Twitter ZADY.url': 'https://x.com/madebyzady',
    'Steam ZADY.url': 'https://steamcommunity.com/id/zady03/',
    'Musicboard ZADY.url': 'https://musicboard.app/zady'
}
const DESKTOP_FOLDERS =[{'name': 'ABOUT ZADY'}, {'name': 'ACCOUNTS', 'description': 'ALL MY LINKS..', 'files': ['1 - Personal IG.url', '2 - Projects IG.url', '3 - Photography IG.url', '4 - Pinterest ZADY.url', '5 - Discord ZADY.url', '6 - Reddit ZADY.url', '7 - TikTok ZADY.url', '8 - Spotify ZADY.url', '9 - Youtube ZADY.url', '10 - Facebook ZADY.url', '11 - Twitter ZADY.url', '12 - Steam ZADY.url', '13 - Musicboard ZADY.url']}, {'name': 'COLLABS', 'description': 'CLIENT WORK AND COLLABORATIVE PROJECTS.', 'files': ['22 - Polaosam Blackout Cover Art.png', '21 - Polaosam Supersonic Cover Art.png', '20 - TheRealRed FEITH Design.png', '*19 - KAZ! Laydown Lyric Video.mp4', '18 - KAZ! Laydown Cover Art.png', '17 - TheRealRed Halloween 2024 Stream Decoration.png', '16 - Polaosam Quick Attack Cover Art.png', '15 - KAZ! Xuelei Hü Cover Art.jpg', '14 - ivor Karanfili EP Merch Design.png', '13 - ivor Karanfili EP Cover Art.png', '12 - ivor Zbog Tebe Sam Zavolio Zimu Cover Art.png', '11 - Rolling Loud California 2024 - Ye & Ty Dolla $ign.png', '10 - Rolling Loud California 2024 - Future & Metro Boomin.png', '9 - Rolling Loud California 2024 - Post Malone.png', '8 - Rolling Loud California 2024 - Nicki Minaj.png', '*7 - Revista LYCEUM - Liceul Teoretic „Callatis” - Decembrie 2023.pdf', '6 - ProjectXXI Party Flyer.png', '5 - OPIUM Afterparty Flyer.png', '4 - Vincenzo K-Drama Poster by ZADY.PNG', '3 - ivor Kontakti Cover Art.png', '*2 - Polaosam Contra Lyric Video.mp4', '1 - Polaosam Contra Cover Art.png']}, {'name': 'LOGOS', 'description': 'LOGO DESIGNS.', 'files': ['9 - EXS Logo.png', '8 - Cofeina Fix Logo.png', '7 - TWOPERCENTSIX Logo.png', '6 - PUNKLRY Logo.png', '5 - ZADY DOUBLE CROSS Logo.png', '4 - ZADY Logo.png', '3 - ZSM Recruitments Logo.png', '2 - Resell Jester Logo.png', '1 - Sulim Media Logo.png']}, {'name': 'PERSONAL WORK', 'description': 'MY OWN PROJECTS.', 'files': ['21 - Playboi Carti _I AM MUSIC_ Poster 2 by ZADY.png', '20 - STAR 2hollis Poster by ZADY.png', '19 - CHROMAKOPIA Poster by ZADY.png', '18 - MASQUERADE Design by ZADY.png', '17 - SPACEBOUND Poster by ZADY.png', '17.2 - SPACEBOUND T-Shirt Design by ZADY.png', '16 - SELF-REFLECT_PosterbyZADY.png', '15 - Jorōgumo - Spider Geisha (Poster by ZADY).png', '14 - Hard Jewelry LA 2024 PopUp Contest Poster by ZADY.png', '14.2 - Hard Jewelry LA 2024 PopUp Contest T-Shirt Design by ZADY.png', '13 - DIGITALLY PUNKED DEMISE (Poster by ZADY).png', '12 - Playboi Carti I AM MUSIC Singles Cover by ZADY.PNG', '11 - Evangelion Eva01 Poster by ZADY.PNG', '10 - Chess Poster by ZADY.PNG', '9 - Young Thug Poster by ZADY.PNG', '8 - Lil Uzi Vert Spiky Hair Poster by ZADY.PNG', '7 - Cyberpunk Edgerunners David Poster by ZADY.PNG', '6 - Cyberpunk Edgerunners Lucy Poster by ZADY.PNG', '5 - JoJo Golden Wind Poster by ZADY.PNG', '4 - Travis Scott Utopia Poster by ZADY.PNG', '3 - Lil Uzi Vert Pink Tape Fanmade Cover.png', '2 - Playboi Carti Antagonist Tour Poster by ZADY.png', '1 - Evangelion Poster by ZADY.png']}, {'name': 'Support ZADY'}]

class Folder {
    constructor(config) {
@@ -26,384 +26,384 @@

    getIcon(name) {
        const useDefault = name.startsWith('*');
        if (!useDefault) return `virtual_desktop/_icons/${name}.ico`;
        if (!useDefault) return `virtual_desktop/_icons/${name}.png`;

        const cleanName = useDefault ? name.substring(1) : name;
        const parts = cleanName.split('.');

        // nu are extensie -> e folder
        if (parts.length == 1)
            return "static/img/desktop/folder.png";
        // altfel fisier
        const extension = parts.pop().toLowerCase();
        return `static/img/explorer/files/${extension}.png`;
    }

    // adauga pe desktop
    create() {
        if (this.name.startsWith('_')) return;
        this.element = document.createElement('div');
        this.element.className = 'icon';
        this.element.innerHTML = `
            <img src="${this.icon}" alt="${this.name}">
            <span>${this.name}</span>
        `;
        this.element.addEventListener('click', () => this.select());
        this.element.addEventListener('dblclick', () => this.open());
        document.querySelector('.desktop').appendChild(this.element);
    }

    select() {
        document.querySelectorAll('.icon').forEach(icon => {
            icon.classList.remove('selected');
        });
        this.isSelected = true;
        this.element.classList.add('selected');
    }

    open() {
        // "foldere" speciale
        if (this.name == "ABOUT ZADY")
            return windowManager.createWindow(
                "ABOUT ZADY",
                `<pre style="white-space:pre-wrap;padding:8px;height:100%">Hey, I'm ZADY — a 2006-born Romanian creative freelancer, active in graphic design, photo/video editing, photography, and whatever else sparks my curiosity along the way.
I’ve collaborated with clients worldwide: from major festivals like Rolling Loud to local venues, musicians, event organizers, YouTubers, and brands.
My work is fueled by a love for all things artistic and the creative process itself, with fashion and music not just as interests, but as the core inspiration behind my entire vision.</pre>`,
                440, 290, "static/img/explorer/files/txt.png"
            );
        if (this.name == "Support ZADY")
            return window.open("https://ko-fi.com/zady03", "_blank").focus();

        const windowId = windowManager.createWindow(
            this.name,
            `
                <div class="explorer-addressbar">
                    <label for="explorer-address">Address</label>
                    <input id="explorer-address" type="text" value="C:\\WINDOWS\\Desktop\\${this.name}" readonly />
                </div>
                <div class="explorer-main">
                    <div class="explorer-pane">
                        <img src="${this.icon}" alt="Folder" style="width:32px;height:32px;margin-bottom:8px;">
                        <span style="font-weight:bold;color:#222;margin-bottom:4px;">${this.name}</span>
                        <div class="explorer-underline" style="width:100px;"></div>
                        <div class="explorer-desc" style="font-size:12px;">${this.description}</div>
                    </div>
                    <div class="explorer-filescroll">
                        ${this.files.map(fileName => {
                            const cleanName = fileName.startsWith('*') ? fileName.substring(1) : fileName;
                            const displayName = cleanName.indexOf(" - ") == -1 ? cleanName : cleanName.slice(cleanName.indexOf(" - ") + 3);
                            return `
                                <div class="explorer-fileicon" data-file-path="virtual_desktop/${this.name}/${cleanName}">
                                    <img src="${this.getIcon(fileName)}" alt="${displayName}">
                                    <span class="label">${displayName}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                <div class="explorer-statusbar">
                    <div class="explorer-statusbar-cell">${this.files.length} object(s)</div>
                    <div class="explorer-statusbar-right"><img src="static/img/desktop/computer.png" style="width:16px;height:16px;margin-right:4px;">ZADY</div>
                </div>
            `,
            600, 400, this.icon
        );

        const win = document.querySelector(`.window[data-window-id="${windowId}"]`);
        const filescroll = win.querySelector('.explorer-filescroll');

        // Add event listeners to file icons within this specific window
        filescroll.addEventListener('click', (e) => {
            const fileIcon = e.target.closest('.explorer-fileicon');
            if (fileIcon) {
                e.stopPropagation();
                // Deselect all file icons in this window
                filescroll.querySelectorAll('.explorer-fileicon').forEach(icon => {
                    icon.classList.remove('selected');
                });
                fileIcon.classList.add('selected');
            }
        });

        // todo: not scroll, icons
        filescroll.addEventListener('dblclick', (e) => {
            const fileIcon = e.target.closest('.explorer-fileicon');
            if (fileIcon) {
                const filePath = fileIcon.dataset.filePath;
                const extension = fileIcon.querySelector('.label').textContent.split('.').pop().toLowerCase();
                const windowTitle = fileIcon.querySelector('.label').textContent;
                const iconSrc = fileIcon.querySelector('img').src;
                let windowHtml = `<pre style="white-space:pre-wrap;padding:8px;height:100%;">Loading...</pre>`;

                const newWindowId = windowManager.createWindow(
                    windowTitle,
                    windowHtml,
                    600, 400,
                    iconSrc
                );
                const newWin = document.querySelector(`.window[data-window-id="${newWindowId}"]`);
                const winBody = newWin.querySelector('.window-body');

                if (['png', 'jpg', 'jpeg', 'gif', 'bmp'].includes(extension)) {
                    winBody.innerHTML = `<img src="${filePath}" style="width:100%;height:100%;object-fit:contain;">`;
                    const img = new Image();
                    img.onload = () => {
                        const aspectRatio = img.width / img.height;
                        const maxWidth = window.innerWidth * 0.8;
                        const maxHeight = window.innerHeight * 0.8;

                        let width = maxWidth;
                        let height = width / aspectRatio;

                        if (height > maxHeight) {
                            height = maxHeight;
                            width = height * aspectRatio;
                        }

                        newWin.style.width = `${width}px`;
                        newWin.style.height = `${height}px`;
                    };
                    img.src = filePath;
                } else if (['txt', 'md', 'log'].includes(extension)) {
                    fetch(filePath)
                        .then(response => response.text())
                        .then(text => {
                            winBody.innerHTML = `<pre style="white-space:pre-wrap;padding:8px;height:100%">${text}</pre>`;
                        });
                } else if (['pdf', 'mp4'].includes(extension)) {
                    winBody.innerHTML = `<iframe src="${filePath.replace('.mp4', '.html')}" style="width:100%;height:100%;border:none;"></iframe>`;
                    if (extension == 'mp4') {
                        newWin.style.width = '580px';
                        newWin.style.height = '350px';
                    }
                } else if (extension == 'url') {
                    let newtab = window.open();
                    newtab.location.href = LINK_STORE[windowTitle]
                    newtab.focus()
                    windowManager.closeWindow(newWindowId);
                }
                else winBody.innerHTML = `<pre style="white-space:pre-wrap;padding:8px;">Unknown file</pre>`;
            }
        });
    }
}

function initializeDesktopFolders() {
    DESKTOP_FOLDERS.forEach(folderConfig => {
        new Folder(folderConfig);
    });
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
    document.getElementById('time').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

// Window management
class WindowManager {
    constructor() {
        this.windows = [];
        this.activeWindow = null;
        this.taskbarItems = document.querySelector('.taskbar-items');
    }

    createWindow(title, content, width=400, height=300, icon=null) {
        const windowId = Date.now();
        const window = document.createElement('div');
        window.className = 'window';
        window.dataset.windowId = windowId;

        // cascada
        const offset = this.windows.length * 20;
        window.style.width = `${width}px`;
        window.style.height = `${height}px`;
        window.style.left = `${50 + offset}px`;
        window.style.top = `${50 + offset}px`;

        const titleBar = document.createElement('div');
        titleBar.className = 'title-bar';
        titleBar.innerHTML = `
            ${icon ? `<div class="title-bar-icon" style="background-image: url('${icon}')"></div>` : ''}
            <div class="title-bar-text">${title}</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Close"></button>
            </div>
        `;

        const windowBody = document.createElement('div');
        windowBody.className = 'window-body';
        windowBody.innerHTML = content;

        window.appendChild(titleBar);
        window.appendChild(windowBody);
        document.body.appendChild(window);

        const taskbarItem = document.createElement('button');
        taskbarItem.className = 'taskbar-item';
        taskbarItem.innerHTML = `<span>${title}</span>`;
        taskbarItem.dataset.windowId = windowId;
        this.taskbarItems.appendChild(taskbarItem);

        this.makeDraggable(window, titleBar);

        // Add window controls
        const closeBtn = titleBar.querySelector('button[aria-label="Close"]');
        closeBtn.addEventListener('click', () => this.closeWindow(windowId));
        const minimizeBtn = titleBar.querySelector('button[aria-label="Minimize"]');
        minimizeBtn.addEventListener('click', () => this.minimizeWindow(windowId));

        // Add click handler to taskbar item
        taskbarItem.addEventListener('click', () => {
            const win = this.windows.find(w => w.id === windowId);
            if (win && win.element.style.display === 'none') {
                win.element.style.display = 'flex';
                this.activateWindow(windowId);
            } else if (win && win === this.activeWindow) {
                win.element.style.display = 'none';
            } else {
                this.activateWindow(windowId);
            }
        });

        // Add click handler to window for activation
        window.addEventListener('mousedown', () => {
            this.activateWindow(windowId);
        });

        this.windows.push({
            id: windowId,
            element: window,
            taskbarItem: taskbarItem
        });

        this.activateWindow(windowId);
        return windowId;
    }

    makeDraggable(window, titleBar) {
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        titleBar.addEventListener('mousedown', dragStart);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);

        function dragStart(e) {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;

            if (e.target === titleBar || titleBar.contains(e.target)) {
                isDragging = true;
            }
        }

        function drag(e) {
            if (isDragging) {
                e.preventDefault(); // ca sa nu tragem de text
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;

                xOffset = currentX;
                yOffset = currentY;

                setTranslate(currentX, currentY, window);
            }
        }

        function dragEnd() {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
        }

        function setTranslate(xPos, yPos, el) {
            el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        }
    }

    activateWindow(windowId) {
        this.windows.forEach(win => {
            if (win.id === windowId) {
                win.element.classList.add('active');
                win.element.style.zIndex = '100';
                win.taskbarItem.classList.add('active');
                win.element.querySelector('.title-bar').classList.remove('inactive');
                this.activeWindow = win;
            } else {
                win.element.classList.remove('active');
                win.element.style.zIndex = '1';
                win.taskbarItem.classList.remove('active');
                win.element.querySelector('.title-bar').classList.add('inactive');
            }
        });
    }

    closeWindow(windowId) {
        const windowIndex = this.windows.findIndex(win => win.id === windowId);
        if (windowIndex !== -1) {
            const window = this.windows[windowIndex];
            window.element.remove();
            window.taskbarItem.remove();
            this.windows.splice(windowIndex, 1);
        }
    }

    minimizeWindow(windowId) {
        const window = this.windows.find(win => win.id === windowId);
        if (window) {
            window.element.style.display = 'none';
        }
    }
}

// Initialize window manager
const windowManager = new WindowManager();

// deselecteaza cand click altundeva
document.addEventListener('mousedown', (e) => {
    if (!e.target.closest('.icon') && !e.target.closest('.explorer-fileicon')) {
        document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('selected'));
        document.querySelectorAll('.explorer-fileicon').forEach(icon => icon.classList.remove('selected'));
    }
});


document.addEventListener('DOMContentLoaded', () => {
    initializeDesktopFolders();
});

document.getElementById('refresh').addEventListener('click', () => {
    const windowId = windowManager.createWindow(
        "REFRESH",
        `
                <div class="field-row" style="padding: 16px;">
                    <img src="static/img/warning.png" alt="Warning" style="width: 32px; height: 32px; margin-right: 16px;">
                    <div>ARE YOU SURE YOU WANT TO REFRESH THIS WEBSITE?</div>
                </div>
                <div class="field-row" style="justify-content: center; gap: 8px;">
                    <button class="close-refresh">Cancel</button>
                    <button onclick="window.location.reload();">OK</button>
                </div>
        `,
        300, 130,
        "static/img/warning.png"
    );

    const cancel = document.querySelector(`.window[data-window-id="${windowId}"]`).getElementsByClassName('close-refresh')[0];
    cancel.addEventListener('click', () => {
        windowManager.closeWindow(windowId);
    });
