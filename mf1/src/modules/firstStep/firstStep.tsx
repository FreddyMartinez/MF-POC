import { Link } from "react-router-dom";
import { MyButton } from "../../components/Button";
import { useTranslation } from "react-i18next";

export function FirstForm() {
  const { t } = useTranslation();
  return (
    <form>
      <legend>First step</legend>
      <label htmlFor="">{t('fisrtblock.label1')}</label>
      <input type="text" />
      <MyButton>
        <Link to="/second">Next</Link>
      </MyButton>
    </form>
  );
}
