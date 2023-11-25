import { Link } from "react-router-dom";
import { MyButton } from "../../components/Button";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { externalConfigContext } from "../../components/external-config/ExternalConfigContext";

export function FirstForm() {
  const { t } = useTranslation();
  const externalConfig = useContext(externalConfigContext);
  const { add, subtract, counter } = externalConfig.useHostState();

  return (
    <form>
      <legend>First step</legend>
      <p>{t("fisrtblock.label1")}</p>
      <MyButton onClick={subtract}>Subtract</MyButton>
      {counter}
      <MyButton onClick={add}>Add</MyButton>
      <br />
      <MyButton>
        <Link to="/second">Next</Link>
      </MyButton>
    </form>
  );
}
