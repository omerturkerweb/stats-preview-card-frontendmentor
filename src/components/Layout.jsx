export default function Layout() {
  return (
    <div className="card-container cursor-pointer select-none min-w-[1070px] w-[1070px] bg-[var(--dark-desaturated-blue)] h-[445px] flex ">
      <div className="card-container-description p-14 w-[50%]  pr-28 flex flex-col items-center justify-center gap-y-5">
        <h3 className="description-text text-font-lexend-deca text-[30px] font-extrabold tracking-normal">
          Get <span className="text-[var(--soft-violet)]">insights</span> that
          help your business grow.
        </h3>
        <p className="text-[var(--slightly-transparent-white)] text-[14px] text-font-inter leading-6 tracking-wide">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall effeciency
        </p>
        <div className="card-container-description-statistics flex flex-row items-start justify-between w-[100%]  mt-20">
          <div className="statistic-compaines">
            <h4 className="text-font-lexend-deca text-[20px] font-semibold tracking-normal">
              10K+
            </h4>
            <span className="text-[var(--slightly-transparent-white)] text-[12px] text-font-inter">
              COMPANIES
            </span>
          </div>
          <div className="statistic-templates">
            <h4 className="text-font-lexend-deca text-[20px] font-semibold tracking-normal">
              314
            </h4>
            <span className="text-[var(--slightly-transparent-white)] text-[12px] text-font-inter">
              TEMPLATES
            </span>
          </div>
          <div className="statistic-queries">
            <h4 className="text-font-lexend-deca text-[20px] font-semibold tracking-normal">
              12M+
            </h4>
            <span className="text-[var(--slightly-transparent-white)] text-[12px] text-font-inter">
              QUERIES
            </span>
          </div>
        </div>
      </div>

      <div className="card-container-image w-[50%] rounded-r-xl">
        <img
          alt="Stats Preview Card"
          className="w-full h-full"
          src={require("../images/image-header-desktop.jpg")}
        ></img>
      </div>
    </div>
  );
}
