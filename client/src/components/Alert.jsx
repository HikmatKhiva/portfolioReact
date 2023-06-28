const Alert = () => {
  return toastHot.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 flex flex-col w-0 p-4">
          <span className="text-xl text-center">
            Can i save your ip address?
          </span>
          <div className="buttons__flex flex p-2">
            <button className="w-full border rounded bg-green-700 p-2 flex items-center justify-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none">
              Yes
            </button>
            <button
              onClick={() => {
                toastHot.custom(
                  (t) => (
                    <div className="p-2 flex-col items-center max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5">
                      <span className="text-xl">
                        I didn`t save your ip address
                      </span>
                      <button
                        onClick={() => toastHot.dismiss(t.id)}
                        className="border rounded bg-red-700 p-1 text-white"
                      >
                        Cancel
                      </button>
                    </div>
                  ),
                  1000
                );
              }}
              className="w-full rounded bg-red-700  p-2 flex items-center justify-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none"
            >
              No
            </button>
          </div>
        </div>
      </div>
    ),
    {
      duration: 90000,
    }
  );
};

export default Alert;
