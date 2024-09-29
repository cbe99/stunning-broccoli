import { Architecture, Article, Business, Circle, Dashboard, Person, Public, School, ShoppingCart, StarBorder } from "@mui/icons-material";
import DefaultIconSvg from "../assets/defaultIcon";
import ECommerceIconSvg from "../assets/eCommerceIcon";
import ProjectsIconSvg from "../assets/projectsIcon";
import OnlineCourseIconSvg from "../assets/onlineCourseIcon";
import UserProfileIconSvg from "../assets/userProfileIcon";
import AccountIconSvg from "../assets/accountIcon";
import CorporateIconSvg from "../assets/corporateIcon";
import BlogIconSvg from "../assets/blogIcon";
import SocialIconSvg from "../assets/socialIcon";

export const PATHS = [
    {
        heading: 'Favorites Recently',
        items: [
            {
                name: 'Overview',
                route: '/overview',
                children: []
            },
            {
                name: 'Projects',
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
                icon: DefaultIconSvg,
                route: '/default',
                children: [
                    { name: 'Order List', route: '/default/order-list' },
                ]
            },
            {
                name: 'E-Commerce',
                icon: ECommerceIconSvg,
                route: '/ecommerce',
                children: [
                    { name: 'E-Commerce 1', route: '/ecommerce/1' },
                    { name: 'E-Commerce 2', route: '/ecommerce/2' },
                ],
            },
            {
                name: 'Projects',
                icon: ProjectsIconSvg,
                route: '/projects',
                children: [
                    { name: 'Project 1', route: '/projects/1' },
                    { name: 'Project 2', route: '/projects/2' },
                ],
            },
            {
                name: 'Online Courses',
                icon: OnlineCourseIconSvg,
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
                icon: UserProfileIconSvg,
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
                icon: AccountIconSvg,
                route: '/pages/account',
                children: [
                    { name: 'Account', icon: Person, route: '/pages/account' }
                ],
            },
            {
                name: 'Corporate',
                icon: CorporateIconSvg,
                route: '/corporate',
                children: []
            },
            {
                name: 'Blog',
                icon: BlogIconSvg,
                route: '/blog',
                children: []
            },
            {
                name: 'Social',
                icon: SocialIconSvg,
                route: '/social',
                children: []
            },
        ],
    },
];
