const storiesData = [
    {
        id: 1,
        title: "قصة نوح عليه السلام",
        description: "قصة نبي الله نوح عليه السلام مع قومه ودعوته لقومه على مدى 950 عاماً",
        content: `
            <p>عاش نوح عليه السلام تسعمائة وخمسين عاماً يدعو قومه إلى عبادة الله وحده. كان قومه يعبدون الأصنام ويكذبون رسالته. استمر في دعوتهم بصبر وحكمة، لكن لم يؤمن معه إلا قليل.</p>
            <p>أمره الله تعالى ببناء السفينة، وحمل فيها من كل زوجين اثنين من الحيوانات والطيور، وكذلك المؤمنين من أتباعه. ثم أرسل الله الطوفان العظيم الذي أغرق الكافرين.</p>
            <p>قصة نوح عليه السلام تعلمنا الصبر والثبات على الحق، والتوكل على الله في كل الأحوال.</p>
        `
    },
    {
        id: 2,
        title: "قصة إبراهيم عليه السلام",
        description: "قصة خليل الرحمن إبراهيم عليه السلام وبحثه عن الحقيقة",
        content: `
            <p>نشأ إبراهيم عليه السلام في قوم يعبدون الأصنام والكواكب. بدأ رحلة البحث عن الحقيقة منذ صغره، متأملاً في الكون حتى وصل إلى الإيمان بالله الواحد.</p>
            <p>حطم الأصنام ليثبت لقومه بطلان عبادتها، وألقي في النار التي جعلها الله برداً وسلاماً عليه. هاجر بأمر الله، وابتلي بذبح ابنه إسماعيل، وكان لصبره وإيمانه أن نجاه الله وجعله إماماً للناس.</p>
        `
    },
    {
        id: 3,
        title: "قصة موسى عليه السلام",
        description: "قصة كليم الله موسى عليه السلام مع فرعون",
        content: `
            <p>ولد موسى عليه السلام في زمن كان فرعون يقتل فيه أبناء بني إسرائيل. أنقذه الله بأن ألهم أمه أن تلقيه في اليم، ليتربى في قصر فرعون نفسه.</p>
            <p>كلمه الله تعالى وأرسله لدعوة فرعون وقومه، وأيده بالمعجزات. نجى الله موسى وقومه، وأغرق فرعون وجنوده في البحر.</p>
        `
    }
];

// Initialize Stories Section
function initializeStories() {
    const storiesSection = document.getElementById('stories-section');
    if (!storiesSection) return;

    const storiesGrid = document.createElement('div');
    storiesGrid.className = 'stories-grid';

    storiesData.forEach(story => {
        const storyCard = createStoryCard(story);
        storiesGrid.appendChild(storyCard);
    });

    storiesSection.appendChild(storiesGrid);
}

function createStoryCard(story) {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.innerHTML = `
        <div class="story-header">
            <h3>${story.title}</h3>
            <p>${story.description}</p>
            <button class="option-button read" onclick="showStory(${story.id})">اقرأ القصة</button>
        </div>
    `;
    return card;
}

function showStory(storyId) {
    const story = storiesData.find(s => s.id === storyId);
    if (!story) return;

    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
        <h2 class="surah-title">${story.title}</h2>
        <div class="story-content">
            ${story.content}
        </div>
    `;

    modal.style.display = 'block';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displaySurahs();
    showAdkar('morning');
    initializeStories();
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.dataset.section;
            
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(`${section}-section`).classList.add('active');
            
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
    
    // Adkar categories
    document.querySelectorAll('.adkar-category').forEach(category => {
        category.addEventListener('click', (e) => {
            document.querySelectorAll('.adkar-category').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            showAdkar(e.target.dataset.category);
        });
    });
    
    // Modal close button
    document.querySelector('.close').addEventListener('click', () => {
        const modal = document.getElementById('modal'); });
        modal.style.display = 'none'; });