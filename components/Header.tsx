interface Props {
  hallo: string;
  hallo2: string;
}

const Header = ({ hallo, hallo2 }: Props) => {
  return (
    <div>
      {hallo} {hallo2}
    </div>
  );
};

export default Header;
