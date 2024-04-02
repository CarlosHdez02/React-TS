import { type ReactNode } from "react";

//discriminated union
type HintBoxProps={
    mode:'hint';
    children:ReactNode;

}

type WarningBoxProps = {
  mode: "warning";
  severity:'low'|'medium'|'high';
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps & WarningBoxProps;
export default function InfoBox({ mode, severity ,children }: InfoBoxProps) {
  if (mode === "hint") {
    <aside className="infobox infobox-hint">
      <p>{children}</p>
    </aside>;
  }
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
 
      <p>{children}</p>
    </aside>
  );
}
