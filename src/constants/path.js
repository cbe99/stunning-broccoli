import { Architecture, Article, Business, Dashboard, Person, Public, School, ShoppingCart, StarBorder } from "@mui/icons-material";

export const PATHS = [
    {
        heading: 'Favorites',
        items: [
            { name: 'Overview', icon: StarBorder, route: '/overview' },
            { name: 'Projects', icon: StarBorder, route: '/projects' },
        ],
    },
    {
        heading: 'Dashboard',
        items: [
            { name: 'Default', icon: Dashboard, route: `/default` },
            {
                name: 'E-Commerce',
                icon: ShoppingCart,
                subitems: [
                    { name: 'E-Commerce 1', route: `/ecommerce/1` },
                    { name: 'E-Commerce 2', route: `/ecommerce/2` },
                ],
            },
            {
                name: 'Projects',
                icon: StarBorder,
                subitems: [
                    { name: 'Project 1', route: '/projects/1' },
                    { name: 'Project 2', route: '/projects/2' },
                ],
            },
            {
                name: 'Online Courses',
                icon: School,
                subitems: [
                    { name: 'Course 1', route: '/courses/1' },
                    { name: 'Course 2', route: '/courses/2' },
                ],
            },
        ],
    },
    {
        heading: 'Pages',
        items: [
            {
                name: 'User Profile',
                icon: Article,
                subitems: [
                    { name: 'Overview', icon: Person, route: '/overview' },
                    { name: 'Projects', icon: Person, route: '/projects' },
                    { name: 'Campaigns', icon: Business, route: '/campaigns' },
                    { name: 'Documents', icon: Architecture, route: '/documents' },
                    { name: 'Followers', icon: Public, route: '/followers' },
                ],
            },
            {
                name: 'Account',
                icon: Article,
                subitems: [{ name: 'Account', icon: Person, route: '/account' }],
            },
            {
                name: 'Corporate',
                icon: Article,
                subitems: [{ name: 'Corporate', icon: Person, route: '/corporate' }],
            },
            {
                name: 'Blog',
                icon: Article,
                subitems: [{ name: 'Blog', icon: Person, route: '/blog' }],
            },
            {
                name: 'Social',
                icon: Article,
                subitems: [{ name: 'Social', icon: Person, route: '/social' }],
            },
        ],
    },
];