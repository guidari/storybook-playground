import { fn } from "storybook/test";

import { Header } from "./Header";

export default {
  title: "Example/Header",
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/web-components/vue/writing-docs/autodocs
  tags: ["autodocs"],
  render: (args: any) => Header(args),
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} as any;
export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {};
