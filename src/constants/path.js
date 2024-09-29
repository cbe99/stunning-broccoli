import { Architecture, Article, Business, Dashboard, Person, Public, School, ShoppingCart, StarBorder } from "@mui/icons-material";

export const PATHS = [
    {
        heading: 'Favorites',
        items: [
            {
                name: 'Overview',
                icon: StarBorder,
                route: '/overview',
                children: []
            },
            {
                name: 'Projects',
                icon: StarBorder,
                route: '/projects',
                children: []
            },
        ],
    },
    {
        heading: 'Dashboard',
        items: [
            {
                name: 'Default',
                icon: Dashboard,
                route: '/default',
                children: [
                    { name: 'Order List', route: '/default/order-list' },
                ]
            },
            {
                name: 'E-Commerce',
                icon: ShoppingCart,
                route: '/ecommerce',
                children: [
                    { name: 'E-Commerce 1', route: '/ecommerce/1' },
                    { name: 'E-Commerce 2', route: '/ecommerce/2' },
                ],
            },
            {
                name: 'Projects',
                icon: StarBorder,
                route: '/projects',
                children: [
                    { name: 'Project 1', route: '/projects/1' },
                    { name: 'Project 2', route: '/projects/2' },
                ],
            },
            {
                name: 'Online Courses',
                icon: School,
                route: '/courses',
                children: [
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
                route: '/pages',
                children: [
                    { name: 'Overview', icon: Person, route: '/pages/overview' },
                    { name: 'Projects', icon: Person, route: '/pages/projects' },
                    { name: 'Campaigns', icon: Business, route: '/pages/campaigns' },
                    { name: 'Documents', icon: Architecture, route: '/pages/documents' },
                    { name: 'Followers', icon: Public, route: '/pages/followers' },
                ],
            },
            {
                name: 'Account',
                icon: Article,
                route: '/pages/account',
                children: [
                    { name: 'Account', icon: Person, route: '/pages/account' }
                ],
            },
            {
                name: 'Corporate',
                icon: Article,
                route: '/corporate',
                children: []
            },
            {
                name: 'Blog',
                icon: Article,
                route: '/blog',
                children: []
            },
            {
                name: 'Social',
                icon: Article,
                route: '/social',
                children: []
            },
        ],
    },
];
