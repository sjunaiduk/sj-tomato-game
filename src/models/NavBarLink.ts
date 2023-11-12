export default interface NavBarLink {
  name: string;
  path: string;
  type?: "Play" | "Login" | "Logout";
}
