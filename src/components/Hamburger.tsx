import classNames from "classnames";

type Props = {
  /**Whether the icon clicked or not */
  isClicked: boolean;

  /**onClick handler */
  onClick: () => void;
};

function Hamburger(props: Props) {
  const { isClicked, onClick } = props;
  return (
    <div
      className="flex flex-col w-[40px] h-[20px] justify-between lg:hidden"
      onClick={onClick}
    >
      <div
        className={classNames(
          "h-[5px] bg-secondary rounded-[50px] transition-all duration-300 ease-in-out",
          {
            ["-rotate-45 -translate-y-[6px] origin-top-right"]: isClicked,
          }
        )}
      ></div>
      <div
        className={classNames(
          "h-[5px] bg-secondary rounded-[50px] transition-all duration-300 ease-in-out",
          {
            ["rotate-45 translate-y-[6px] origin-bottom-right"]: isClicked,
          }
        )}
      ></div>
    </div>
  );
}

export default Hamburger;
