interface TextProps {
  children: React.ReactNode;
  color: keyof typeof colorStyles;
  size: keyof typeof sizeStyles;
}
const colorStyles = {
  champion_alias: "text-champion_alias",
  item_price: "text-item_price",
  item_explanation_title: "text-item_explanation_title",
  item_explanation_content: "text-item_explanation_content",
  item_ability: "text-item_ability",
};

const sizeStyles = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};

const Text: React.FC<TextProps> = ({ children, color, size }) => {
  const styles = `${colorStyles[color]} ${sizeStyles[size]}`;
  return <p className={styles}>{children}</p>;
};

export default Text;
