const libraryData = {
    categories: [
        { id: 'science', name: 'Science', icon: 'fas fa-flask', description: 'Explore the mysteries of the universe.' },
        { id: 'tech', name: 'Technology', icon: 'fas fa-laptop-code', description: 'The latest in computing and innovation.' },
        { id: 'history', name: 'History', icon: 'fas fa-landmark', description: 'Journey through the eras of humanity.' },
        { id: 'literature', name: 'Literature', icon: 'fas fa-book', description: 'Timeless classics and modern fiction.' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-square-root-alt', description: 'The universal language of logic.' }
    ],
    books: [
        { id: 1, title: 'The Universe in a Nutshell', author: 'Stephen Hawking', category: 'science', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400', trending: true },
        { id: 2, title: 'Clean Code', author: 'Robert C. Martin', category: 'tech', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400', trending: true },
        { id: 3, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'history', image: 'https://images.unsplash.com/photo-1544383335-d2275f6e8125?auto=format&fit=crop&q=80&w=400', trending: true },
        { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'literature', image: 'https://images.unsplash.com/photo-1543004218-ee141104e144?auto=format&fit=crop&q=80&w=400', trending: true },
        { id: 5, title: 'Brief History of Time', author: 'Stephen Hawking', category: 'science', image: 'https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=400', trending: true },
        { id: 6, title: 'The Pragmatic Programmer', author: 'David Thomas', category: 'tech', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400', trending: true },
        { id: 7, title: 'Guns, Germs, and Steel', author: 'Jared Diamond', category: 'history', image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&q=80&w=400', trending: true },
        { id: 8, title: '1984', author: 'George Orwell', category: 'literature', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400', trending: true },
        { id: 9, title: 'Fermat\'s Enigma', author: 'Simon Singh', category: 'math', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400', trending: true },
        { id: 10, title: 'The Soul of a New Machine', author: 'Tracy Kidder', category: 'tech', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400', trending: true },
        { id: 11, title: 'Deep Learning', author: 'Ian Goodfellow', category: 'tech', image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400', trending: false },
        { id: 12, title: 'Calculus Made Easy', author: 'Silvanus P. Thompson', category: 'math', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400', trending: false }
    ],
    achievements: [
        { label: 'Monthly Users', value: 10000, suffix: '+', icon: 'fas fa-users' },
        { label: 'Books Read', value: 50000, suffix: '+', icon: 'fas fa-book-open' },
        { label: 'Active Members', value: 5000, suffix: '+', icon: 'fas fa-user-check' },
        { label: 'Categories', value: 50, suffix: '+', icon: 'fas fa-th-large' }
    ]
};
