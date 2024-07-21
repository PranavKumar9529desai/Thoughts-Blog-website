import { atom, RecoilState } from "recoil";
import { Tags } from "@components/BlogSelctor";

const DefaultTags  = "React" as Tags;
   

export const TagsAtom: RecoilState<Tags> = atom({
  key: "Tagatom",
  default: DefaultTags,
});

