const libraries = [
	{
		id: 'fa',
		name: 'Font Awesome 6',
		version: '6.5.2',
		css: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
		prefix: 'fa-',
		fontFamily: '"Font Awesome 6 Free", "Font Awesome 6 Brands"',
		regex: /\.fa-([^:]+):before\s*\{\s*content/g,
		hasStyles: true,
		baseClass: 'fa-solid'
	},
	{
		id: 'bi',
		name: 'Bootstrap Icons',
		version: '1.11.3',
		css: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css',
		prefix: 'bi-',
		fontFamily: 'bootstrap-icons',
		regex: /\.bi-([^:]+)::?before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: 'bi'
	},
	{
		id: 'ri',
		name: 'Remix Icon',
		version: '4.2.0',
		css: 'https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css',
		prefix: 'ri-',
		fontFamily: 'remixicon',
		regex: /\.ri-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: ''
	},
	{
		id: 'mdi',
		name: 'Material Design Icons',
		version: '7.4.47',
		css: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css',
		prefix: 'mdi-',
		fontFamily: 'Material Design Icons',
		regex: /\.mdi-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: 'mdi'
	},
	{
		id: 'iconoir',
		name: 'Iconoir',
		version: '7.7.0',
		css: 'https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css',
		prefix: 'iconoir-',
		fontFamily: 'iconoir',
		regex: /\.iconoir-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: ''
	},
	{
		id: 'tabler',
		name: 'Tabler Icons',
		version: '3.5.0',
		css: 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css',
		prefix: 'ti-',
		fontFamily: 'tabler-icons',
		regex: /\.ti-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: 'ti'
	},
	{
		id: 'eva',
		name: 'Eva Icons',
		version: '1.1.3',
		css: 'https://cdn.jsdelivr.net/npm/eva-icons@1.1.3/style/eva-icons.css',
		prefix: 'eva-',
		fontFamily: 'Eva-Icons',
		regex: /\.eva-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: 'eva'
	},
	{
		id: 'ph',
		name: 'Phosphor Icons',
		version: '2.1.1',
		css: 'https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/dist/phosphor.min.css',
		prefix: 'ph-',
		fontFamily: 'Phosphor',
		regex: /\.ph-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: 'ph'
	},
	{
		id: 'lucide',
		name: 'Lucide',
		version: '0.378.0',
		css: 'https://cdn.jsdelivr.net/npm/lucide-static@0.378.0/font/lucide.css',
		prefix: 'lucide-',
		fontFamily: 'lucide',
		regex: /\.lucide-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: ''
	},
	{
		id: 'bx',
		name: 'Boxicons',
		version: '2.1.4',
		css: 'https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.4/css/boxicons.min.css',
		prefix: 'bx-',
		fontFamily: 'boxicons',
		regex: /\.bx-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: 'bx'
	},
	{
		id: 'la',
		name: 'Line Awesome',
		version: '1.3.0',
		css: 'https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css',
		prefix: 'la-',
		fontFamily: '"Line Awesome Free", "Line Awesome Brands"',
		regex: /\.la-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: 'las'
	},
	{
		id: 'wi',
		name: 'Weather Icons',
		version: '2.0.12',
		css: 'https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.12/css/weather-icons.min.css',
		prefix: 'wi-',
		fontFamily: 'weathericons',
		regex: /\.wi-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: 'wi'
	},
	{
		id: 'themify',
		name: 'Themify Icons',
		version: '1.0.1',
		css: 'https://cdn.jsdelivr.net/gh/themfy/themify-icons@master/css/themify-icons.css',
		prefix: 'ti-',
		fontFamily: 'themify',
		regex: /\.ti-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: ''
	},
	{
		id: 'devicon',
		name: 'Devicon',
		version: '2.16.0',
		css: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css',
		prefix: 'devicon-',
		fontFamily: 'devicon',
		regex: /\.devicon-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: ''
	},
	{
		id: 'fe',
		name: 'Feather Icons',
		version: '1.2.0',
		css: 'https://cdn.jsdelivr.net/npm/feather-icons-font@1.2.0/feather.min.css',
		prefix: 'fe-',
		fontFamily: 'feather',
		regex: /\.fe-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: 'fe'
	},
	{
		id: 'typ',
		name: 'Typicons',
		version: '2.1.2',
		css: 'https://cdnjs.cloudflare.com/ajax/libs/typicons/2.1.2/typicons.min.css',
		prefix: 'typcn-',
		fontFamily: 'typicons',
		regex: /\.typcn-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: 'typcn'
	},
	{
		id: 'sli',
		name: 'Simple Line Icons',
		version: '2.5.5',
		css: 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css',
		prefix: 'icon-',
		fontFamily: 'Simple-Line-Icons',
		regex: /\.icon-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: ''
	},
	{
		id: 'icofont',
		name: 'IcoFont',
		version: '1.0.1',
		css: 'https://cdn.jsdelivr.net/npm/icofont@1.0.1/dist/icofont.min.css',
		prefix: 'icofont-',
		fontFamily: 'IcoFont',
		regex: /\.icofont-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: 'icofont'
	},
	{
		id: 'ion',
		name: 'Ionicons v5',
		version: '5.5.2',
		css: 'https://cdn.jsdelivr.net/npm/ionicons@5.5.2/dist/css/ionicons.min.css',
		prefix: 'ion-',
		fontFamily: 'Ionicons',
		regex: /\.ion-([^:]+):before\s*\{\s*content/g,
		hasStyles: false,
		baseClass: ''
	}
];

let state = {
	activeLibIndex: 0,
	icons: {}, 
	search: '',
	faStyle: 'fa-solid'
};

const els = {
	libList: document.getElementById('libList'),
	grid: document.getElementById('grid'),
	loader: document.getElementById('loader'),
	search: document.getElementById('search'),
	faOptions: document.getElementById('faOptions'),
	toast: document.getElementById('toast'),
	favicon: document.getElementById('dynamic-favicon')
};

function injectCSS() {
	libraries.forEach(lib => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = lib.css;
		document.head.appendChild(link);
	});
}

function createSidebar() {
	els.libList.innerHTML = '';
	libraries.forEach((lib, index) => {
		const btn = document.createElement('button');
		btn.className = `lib-btn ${index === state.activeLibIndex ? 'active' : ''}`;
		btn.innerHTML = `
			<span>${lib.name}</span>
			<span class="lib-count" id="count-${lib.id}">...</span>
		`;
		btn.onclick = () => switchLibrary(index);
		els.libList.appendChild(btn);
	});
}

async function extractIcons(lib) {
	const cacheKey = `icon-gallery-cache-${lib.id}-${lib.version}`;
	const countEl = document.getElementById(`count-${lib.id}`);

	if (state.icons[lib.id]) {
		if (countEl) countEl.textContent = state.icons[lib.id].length;
		return state.icons[lib.id];
	}

	const cachedData = localStorage.getItem(cacheKey);
	if (cachedData) {
		try {
			const icons = JSON.parse(cachedData);
			state.icons[lib.id] = icons;
			if (countEl) countEl.textContent = icons.length;
			return icons;
		} catch (e) {
			console.error('Failed to parse cached icons, refetching.', e);
			localStorage.removeItem(cacheKey);
		}
	}

	try {
		const resp = await fetch(lib.css);
		const text = await resp.text();
		const icons = new Set();
		let match;
		
		const regex = new RegExp(lib.regex);

		while ((match = regex.exec(text)) !== null) {
			icons.add(match[1]);
		}
		
		const sorted = [...icons].sort();
		state.icons[lib.id] = sorted;
		if (countEl) countEl.textContent = sorted.length;
		
		try {
			localStorage.setItem(cacheKey, JSON.stringify(sorted));
		} catch (storageError) {
			console.error("Failed to cache icons in localStorage.", storageError);
		}

		return sorted;
	} catch (fetchError) {
		console.error(`Failed to load library ${lib.name}:`, fetchError);
		if (countEl) countEl.textContent = 'Err';
		return [];
	}
}

async function switchLibrary(index) {
	const oldLink = document.getElementById('library-stylesheet');
	if (oldLink) {
		oldLink.remove();
	}

	state.activeLibIndex = index;
	const lib = libraries[index];

	const link = document.createElement('link');
	link.id = 'library-stylesheet';
	link.rel = 'stylesheet';
	link.href = lib.css;
	document.head.appendChild(link);
	
	document.querySelectorAll('.lib-btn').forEach((b, i) => {
		b.classList.toggle('active', i === index);
	});

	els.faOptions.classList.toggle('visible', lib.id === 'fa');
	
	const icons = state.icons[lib.id];
	
	if (!icons) {
		els.grid.innerHTML = '';
		els.loader.style.display = 'flex';
		const loadedIcons = await extractIcons(lib);
		els.loader.style.display = 'none';
		render(loadedIcons);
	} else {
		render(icons);
	}
	
	updateFavicon();
}

function render(icons) {
	const lib = libraries[state.activeLibIndex];
	const filtered = icons.filter(name => name.toLowerCase().includes(state.search));
	
	els.grid.innerHTML = '';
	
	if (filtered.length === 0) {
		els.grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:#666;padding:40px">No icons found</div>';
		return;
	}

	const fragment = document.createDocumentFragment();

	filtered.forEach(name => {
		const card = document.createElement('div');
		card.className = 'card';
		
		let className;
		if (lib.id === 'fa') {
			className = `${state.faStyle} fa-${name}`;
		} else {
			className = [lib.baseClass, lib.prefix + name].filter(Boolean).join(' ');
		}

		const htmlCode = `<i class="${className}"></i>`;

		card.innerHTML = `
			${htmlCode}
			<div class="card-name">${name}</div>
		`;

		card.onclick = () => {
			navigator.clipboard.writeText(htmlCode);
			card.classList.add('copied');
			setTimeout(() => card.classList.remove('copied'), 600);
			showToast(htmlCode);
		};

		fragment.appendChild(card);
	});

	els.grid.appendChild(fragment);
}

function showToast(text) {
	document.getElementById('toastMsg').textContent = `Copied: ${text}`;
	els.toast.classList.add('show');
	clearTimeout(window.toastTimer);
	window.toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2000);
}

function updateFavicon() {
	const lib = libraries[state.activeLibIndex];
	const icons = state.icons[lib.id];
	if (!icons || icons.length === 0) return;

	const randomName = icons[Math.floor(Math.random() * icons.length)];
	const canvas = document.createElement('canvas');
	canvas.width = 32;
	canvas.height = 32;
	const ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, 32, 32);
	ctx.fillStyle = '#3b82f6';
	
	ctx.font = `20px ${lib.fontFamily}`;
	
	ctx.beginPath();
	ctx.arc(16, 16, 14, 0, 2 * Math.PI);
	ctx.fill();
	
	ctx.fillStyle = "white";
	ctx.font = "bold 14px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(lib.name.substring(0,1), 16, 16);

	els.favicon.href = canvas.toDataURL('image/png');
}

function initializeApp() {
	injectCSS();
	createSidebar();
	
	switchLibrary(0);
	
	setTimeout(() => {
		libraries.forEach((lib, index) => {
			if (index !== state.activeLibIndex) {
				extractIcons(lib);
			}
		});
	}, 500);
}

initializeApp();

els.search.addEventListener('input', (e) => {
	state.search = e.target.value.toLowerCase().trim();
	const lib = libraries[state.activeLibIndex];
	if (state.icons[lib.id]) {
		render(state.icons[lib.id]);
	}
});

document.querySelectorAll('.style-btn').forEach(btn => {
	btn.addEventListener('click', () => {
		document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
		btn.classList.add('active');
		state.faStyle = btn.dataset.style;
		const lib = libraries[state.activeLibIndex];
		if (state.icons[lib.id]) {
			render(state.icons[lib.id]);
		}
	});
});

setInterval(updateFavicon, 5000);