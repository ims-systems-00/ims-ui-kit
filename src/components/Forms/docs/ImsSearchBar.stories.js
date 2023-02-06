import ImsSearchBar from "../ImsSearchBar/ImsSearchBar";

export default {
  title: "components/Forms/SearchBar",
  component: ImsSearchBar
};
const Template = (args) => <ImsSearchBar {...args} />;
export const SearchBar = Template;
SearchBar.args = {};
