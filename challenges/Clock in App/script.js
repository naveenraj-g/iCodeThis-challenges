const goBackBtn = document.querySelector(".back-icon");
const container = document.querySelector(".add-hours-con");
const noHoursHTML = `
<div class="no-hour">
        <svg
          class="clock"
          fill="currentColor"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  d="M414.827,72.045c-0.252-0.338-0.5-0.693-0.809-1c-0.309-0.309-0.651-0.561-0.991-0.816 c-43.842-43.388-104.094-70.228-170.5-70.228c-66.408,0-126.658,26.838-170.5,70.224c-0.34,0.254-0.682,0.502-0.991,0.811 c-0.309,0.307-0.557,0.651-0.809,0.991C26.838,115.867,0,176.119,0,242.525c0,66.408,26.838,126.658,70.226,170.5 c0.252,0.34,0.5,0.682,0.809,0.991c0.309,0.309,0.651,0.557,0.991,0.811c43.842,43.388,104.092,70.224,170.5,70.224 c29.71,0,58.745-5.316,86.289-15.798c4.641-1.763,6.733-6.956,4.969-11.588c-1.763-4.64-7.171-6.971-11.82-5.202 c-22.717,8.642-46.684,13.467-71.386,14.423v-53.695c0-4.965-4.018-8.982-8.982-8.982c-4.965,0-8.982,4.018-8.982,8.982v53.7 c-53.895-2.18-104.785-24.342-142.781-59.434l38.136-37.897c3.509-3.509,3.625-9.193,0.116-12.702 c-3.509-3.509-9.134-3.509-12.642,0l-37.875,38.199C42.474,357.063,20.342,306.01,18.16,252.115h53.7 c4.965,0,8.982-4.018,8.982-8.982s-4.018-8.982-8.982-8.982h-53.7c2.182-56.14,24.342-105.555,59.436-143.548l37.904,37.75 c1.754,1.755,4.052,2.557,6.351,2.557c2.298,0,4.597-0.917,6.351-2.671c3.509-3.507,3.509-9.21,0-12.719L89.833,77.606 c37.993-35.096,88.886-57.265,142.781-59.447v53.7c0,4.965,4.018,8.982,8.982,8.982c4.965,0,8.982-4.018,8.982-8.982v-53.7 c56.14,2.182,105.717,24.342,143.711,59.439l-37.662,37.901c-3.509,3.509-3.392,9.193,0.116,12.702 c1.754,1.754,4.109,2.632,6.41,2.632c2.298,0,4.625-0.877,6.379-2.632l37.91-37.599c35.094,37.996,57.268,87.408,59.449,143.548 h-53.699c-4.965,0-8.982,4.018-8.982,8.982s4.017,8.982,8.982,8.982h53.704c-1.044,26.947-6.743,52.469-17.02,77.101 c-1.912,4.579,0.254,9.68,4.833,11.592c4.561,1.895,9.825-0.329,11.746-4.908c12.342-29.579,18.597-61.004,18.597-93.338 C485.053,176.157,458.215,115.887,414.827,72.045z"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M431.158,350.315c-44.579,0-80.842,36.263-80.842,80.842c0,44.579,36.263,80.842,80.842,80.842 c44.579,0,80.842-36.263,80.842-80.842C512,386.578,475.737,350.315,431.158,350.315z M431.158,494.034 c-34.667,0-62.877-28.211-62.877-62.877c0-34.667,28.211-62.877,62.877-62.877s62.877,28.211,62.877,62.877 C494.035,465.823,465.825,494.034,431.158,494.034z"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M431.158,377.262c-19.816,0-35.93,16.114-35.93,35.93c0,4.965,4.017,8.982,8.982,8.982c4.965,0,8.982-4.018,8.982-8.982 c0-9.904,8.061-17.965,17.965-17.965c9.903,0,17.965,8.061,17.965,17.965c0,3.667-2.351,6.026-8.57,11.368 c-5.588,4.807-12.544,10.781-17.43,20.544c-2.219,4.439-0.421,9.833,4.018,12.053c1.289,0.64,2.658,0.947,4.009,0.947 c3.298,0,6.465-1.816,8.044-4.965c3.263-6.526,8.246-10.807,13.07-14.948c6.947-5.974,14.825-12.737,14.825-25 C467.088,393.376,450.974,377.262,431.158,377.262z"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M250.579,207.777v-82.024c0-4.965-4.018-8.982-8.982-8.982c-4.965,0-8.982,4.018-8.982,8.982v82.024 c-11.228,3.259-21.577,12.899-24.836,26.373h-37.112c-4.965,0-8.982,4.018-8.982,8.982c0,4.965,4.017,8.982,8.982,8.982h37.112 c4.002,15.719,18.039,26.645,34.748,26.645c19.816,0,35.465-16.267,35.465-36.083 C277.991,225.968,266.298,211.782,250.579,207.777z M242.526,260.49c-9.904,0-17.965-8.062-17.965-17.965 c0-9.904,8.061-17.965,17.965-17.965c9.903,0,17.965,8.061,17.965,17.965C260.491,252.429,252.43,260.49,242.526,260.49z"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M439.474,472.657c-0.447-1.167-1.167-2.158-1.974-2.965c-0.456-0.36-0.904-0.807-1.351-1.079 c-0.447-0.36-0.991-0.623-1.526-0.807c-0.535-0.27-1.167-0.447-1.711-0.535c-2.868-0.631-6.018,0.36-8.079,2.421 c-0.904,0.904-1.526,1.886-1.974,2.965c-0.456,1.079-0.719,2.246-0.719,3.412c0,1.167,0.263,2.342,0.719,3.412 c0.447,1.079,1.07,2.07,1.974,2.965c1.702,1.711,3.947,2.605,6.289,2.605c2.421,0,4.667-0.895,6.377-2.605 c0.807-0.895,1.526-1.886,1.974-2.965c0.447-1.07,0.631-2.246,0.631-3.412C440.105,474.902,439.921,473.736,439.474,472.657z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <p class="no-hours-desc">You haven't logged any hours yet</p>
      </div>
      <ion-icon name="add-outline" class="add-remove-icon"></ion-icon>
    </div>
`;

const addHours = `
<div class="add-hours">
          <form class="add-hours-form">
            <label class="add-hours-title">Select hour type</label>
            <select class="add-hours-options">
              <option value="Overworked hours" class="add-hours-option">
                Overworked hours
              </option>
              <option value="Normal hours" class="add-hours-option">
                Normal hours
              </option>
              <option value="Other hours" class="add-hours-option">
                Other hours
              </option>
            </select>
            <div class="no-hours">
              <input type="number" class="hours-number" value="1" />
              <button class="btn btn-add-min btn-inc">+</button>
              <button class="btn btn-add-min btn-dec">-</button>
            </div>
            <div class="save-cancel">
              <button class="btn btn-cancel">Cancel</button>
              <button class="btn btn-save">Save</button>
            </div>
          </form>
        </div>
`;

let htmlRenderCondition = "notime";

function handleBackBtn() {
  if (htmlRenderCondition !== "notime") {
    htmlRenderCondition = "notime";
    renderCondition();
  }
}

function handleRenderHours(renderHoursCondition) {
  htmlRenderCondition = renderHoursCondition;
  renderCondition();
}

function handleIncDecBtns(btnType, input) {
  if (btnType === "inc") {
    input.value++
  }

  if (btnType === "dec") {
    if (input.value > 0) {
      input.value--;
    }
  }
}

function renderCondition() {
  container.textContent = ""
  if (htmlRenderCondition === "notime") {
    container.insertAdjacentHTML("afterbegin", noHoursHTML);
    const addHoursBtn = document.querySelector(".add-remove-icon");
    addHoursBtn.addEventListener("click", () => handleRenderHours("addhours"));
  }

  if (htmlRenderCondition === "addhours") {
    container.insertAdjacentHTML("beforeend", addHours);
    const form = document.querySelector(".add-hours-form");
    const cancelBtn = document.querySelector(".btn-cancel");
    const saveBtn = document.querySelector(".btn-save");
    const inputNum = document.querySelector(".hours-number");
    const incBtn = document.querySelector(".btn-inc");
    const decBtn = document.querySelector(".btn-dec");
    form.addEventListener("submit", (e) => e.preventDefault());
    cancelBtn.addEventListener("click", () => handleRenderHours("notime"));
    saveBtn.addEventListener("click", () => handleRenderHours("notime"));
    incBtn.addEventListener("click", () => handleIncDecBtns("inc", inputNum));
    decBtn.addEventListener("click", () => handleIncDecBtns("dec", inputNum));
  }
}

renderCondition();

goBackBtn.addEventListener("click", handleBackBtn);