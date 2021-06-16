import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { SignIn, SignUp } from "../pages/Authentication";
import { Search } from "../pages/search/Search";
import { Settings } from "../pages/user/Settings";
import { Welcome } from "../pages/Welcome";
import { Register } from "../pages/admin/Register";
import { ConnectBoat } from "../pages/admin/ConnectBoat";

export const routes = [
	/**
	 *
	 * Global Routes
	 *
	 */
	{
		path: "/",
		exact: true,
		component: Welcome,
	},
	{
		path: "/sign-in",
		component: SignIn,
	},
	{
		path: "/sign-up",
		component: SignUp,
	},
	/**
	 *
	 * User routes.
	 *
	 */
	{
		path: "/user/settings",
		protected: true,
		component: Settings,
	},
	/**
	 *
	 * Admin routes.
	 *
	 */
	{
		path: "/admin",
		protected: true,
		admin: true,
		component: AdminDashboard,
	},

	{
		path: "/search",
		protected: true,
		component: Search,
	},
	{
		path: "/register",
		protected: true,
		admin: true,
		component: Register,
	},
	{
		path: "/connect",
		protected: true,
		admin: true,
		component: ConnectBoat,
	}

];
