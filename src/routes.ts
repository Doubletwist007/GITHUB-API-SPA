import { MainPage } from "./pages/main";
import { Page404 } from "./pages/notFoundPage";
import { RepoProfile } from "./pages/repView";
import { UsersListPage } from "./pages/userList";
import { UserProfile } from "./pages/userView";

export interface IRoute {
    path: string
    component: (() => JSX.Element) | any
}

export const Routes: IRoute[] = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/users',
        component: UsersListPage
    },
    {
        path: '/users/:id(\\d+)',
        component: UserProfile
    },
    {
        path: '/repo/:id(\\d+)',
        component: RepoProfile
    },
    {
        path: '*',
        component: Page404
    }
]