import React from 'react';
import '../Styles/sass/filters.sass';

const IconsData = {
    Icons: [
        {
            name: "rozrywka",
            graphic: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M14.8 21.314c-1.185.44-2.463.686-3.8.686-6.075 0-11-4.924-11-11 0-6.074 4.925-11 11-11 6.074 0 10.999 4.926 10.999 11 0 .463-.032.918-.09 1.365.264.282.421.666.421 1.103v.024l.121-.005c.881 0 1.547.675 1.547 1.57l.002 5.839c0 1.914-1.213 3.104-3.167 3.104h-2.64c-2.07 0-2.76-1.406-3.094-2.084l-.299-.602zm6.033 1.686c1.418 0 2.167-.766 2.167-2.104l-.002-5.839c0-.386-.274-.57-.547-.57-.276 0-.549.185-.549.535v2.56c0 .175-.141.259-.281.259-.145 0-.291-.089-.291-.259v-4.114c0-.396-.288-.589-.577-.589-.293 0-.587.199-.587.589v3.884c0 .164-.131.245-.264.245s-.268-.084-.268-.25v-4.557c0-.391-.285-.59-.613-.59-.322 0-.572.193-.572.59l-.002 4.609c0 .183-.143.275-.285.275-.145 0-.287-.092-.287-.275v-3.872c0-.369-.284-.557-.565-.557-.277 0-.553.182-.553.557v4.794c0 .154-.111.234-.226.234-.084 0-.172-.042-.219-.128l-.785-1.444c-.152-.292-.432-.419-.709-.419-.41 0-.818.277-.818.711 0 .111.027.233.085.362.112.265 1.557 3.112 1.913 3.839.375.762.847 1.524 2.195 1.524h2.64zm.124-11.109c.027-.293.042-.59.042-.891 0-5.514-4.486-10-9.999-10-5.514 0-10 4.486-10 10s4.486 10 10 10c1.176 0 2.301-.209 3.348-.587l-.046-.092c-.718-1.433-1.066-2.127-1.125-2.265-.117-.255-.177-.518-.177-.781 0-.943.816-1.711 1.818-1.711.344 0 .664.089.939.254v-2.291c0-.888.668-1.557 1.553-1.557l.326.032c.258-.49.764-.802 1.385-.802.59 0 1.086.28 1.367.72.117-.027.238-.041.365-.041l.204.012zm-12.519 5.991c-1.989-.746-3.569-2.329-4.308-4.321l-.935.116c.821 2.409 2.721 4.311 5.126 5.139l.117-.934zm.238-1.903c-1.166-.547-2.107-1.49-2.654-2.656l-.954.121c.65 1.578 1.91 2.838 3.49 3.489l.118-.954zm2.324-8.645c2.025 0 3.667 1.641 3.667 3.666s-1.642 3.667-3.667 3.667c-2.026 0-3.667-1.642-3.667-3.667s1.641-3.666 3.667-3.666zm0 1c-1.47 0-2.667 1.196-2.667 2.666 0 1.471 1.197 2.667 2.667 2.667 1.471 0 2.667-1.196 2.667-2.667 0-1.47-1.196-2.666-2.667-2.666zm-.916 2.666c0 .506.41.917.916.917s.917-.411.917-.917-.411-.916-.917-.916-.916.41-.916.916zm6.849-2.443c-.65-1.577-1.912-2.838-3.49-3.488l-.119.954c1.166.546 2.107 1.488 2.656 2.654l.953-.12zm.924-.115c-.746-1.977-2.319-3.547-4.301-4.287l.119-.934c2.395.822 4.289 2.712 5.117 5.104l-.935.117z" /></svg>,
        },
        {
            name: "sport",
            graphic: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M14.562 21.656c-1.515-.3-3.017-1.102-4.232-2.304 5.223-2.042 9.338-5.582 11.381-9.701 1.311 5.447-2.036 10.649-7.149 12.005m-12.371-11.587c1.579.57 2.568 1.441 3.468 2.496-.111 4.025 1.862 7.31 4.534 9.263-5.379-.984-9.093-6.194-8.002-11.759m3.269-5.62c2.23.772 4.523 2.499 6.129 4.611-1.464 1.144-2.977 1.95-4.172 2.484-1.127-1.372-2.449-2.614-4.648-3.386.6-1.439 1.531-2.703 2.691-3.709m10.664-1.55c-.651 1.948-1.757 3.545-3.035 4.83-1.515-1.948-3.552-3.6-5.652-4.619 2.709-1.394 5.879-1.488 8.687-.211m4.513 4.079c-1.404 4.508-5.887 8.644-11.619 10.724-.733-1.173-1.221-2.555-1.339-4.093 2.876-1.199 8.14-4.087 10.203-9.682 1.117.815 2.056 1.853 2.755 3.051m3.363 5.022c0-6.623-5.376-12-12-12-6.623 0-12 5.377-12 12s5.377 12 12 12c6.538 0 12-5.318 12-12" /></svg>
        },
        {
            name: "podroze",
            graphic: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.207 16.434l3.769-1.866-3.863-3.295 1.195-.591 6.253 2.111 2.987-1.479c.788-.395 2.089-.289 2.384.307.047.095.068.203.068.319-.003.609-.613 1.434-1.269 1.764l-2.987 1.479-2.111 6.253-1.195.591-.279-5.069-3.769 1.866-.778 1.873-.835.414-.293-2.831-2.074-1.949.836-.414 1.961.517zm-2.187 4.194c-4.82 1.541-8.629-2.376-9.02-4.628 1.573 1.733 4.624 3.261 7.973 2.256l.886.839.161 1.533zm-8.886-6.985c-.088-.535-.134-1.084-.134-1.643 0-5.523 4.477-10 10-10 4.927 0 9.023 3.565 9.848 8.256l-1.606.802c-1.25-.475-4.441-1.667-4.441-1.667-.645-.227-1.339-.455-1.687-.338.086-.379-.164-.72-.541-.994-.093-.068-.844-.588-.641-.246l.658.654c-.033.022-.173-.238-.173-.048.044-.112.016.483-.087.288-.045-.074.075-.115.005-.222 0-.071-.189-.14-.227-.188-.104-.13-.381-.415-.531-.483-.041-.019-.636.073-.686.092l-.149.259c-.125.046-.24.105-.35.178l-.13.294c-.058.05-.638.242-.641.25.025-.063-.406-.143-.378-.268.032-.137.178-.567.14-.723-.04-.165.895.236.956-.197.024-.187.038-.406-.262-.437.057.006.58-.205.666-.3.122-.14.401-.37.604-.37.236 0 .185-.344.294-.512.109.044-.059.313.072.422-.008-.085.371.047.408.028.087-.047.571-.019.496-.247-.084-.231.042-.162.15-.211-.019.008.283-.515.335-.344-.035-.176-.35.062-.46.054-.254-.021-.147-.434-.05-.555.074-.096-.203-.213-.206-.03-.005.274-.26.522-.202.887.091.549-.612-.132-.673-.095-.234.141-.424-.178-.304-.371.124-.196.42-.186.544-.396.086-.148.186-.32.321-.433.445-.374.568-.075 1.012-.034.435.04.147.103.088.27-.058.159.238.215.34.082.059-.076.192-.269.249-.411.074-.185.751-.164.278-.447-.312-.186-1.67-.56-2.58-.56-.197 0-.334.218-.484.343-.297.246-1.056.729-1.479.582-.433-.149-1.359.55-1.507.555-.055.003.002-.529.298-.567-.129.018 1.039-.59 1.007-.717-.038-.15-2.332.685-2.23.853.048.076.249.076-.013.245-.15.09-.311.667-.452.667-.421.184-.447-.362-.915.341l-.746.301c-1.106 1.175-1.871 2.664-2.149 4.318-.011.067.278.188.316.234.093.112.093.593.139.751.115.398.399.62.617.982.128.216.341.762.274.988.091-.148.892.68 1.038.852.345.406.612.898.051 1.299-.146.106.125.658.108.97-2.552-.493-4.198-3.043-4.198-3.043zm10.308.832c-.01-.166-.114-.363-.331-.3-.47.137-.327-.368-.669-.344-.247.017-.45.174-.679.243-.288.086-.583-.068-.868-.104-1.173-.148-1.555-1.488-1.249-2.456.031-.158-.095-.452-.04-.574.131-.293.401-.623.635-.845.131-.125.301-.093.456-.19.239-.151.242-.461.476-.651.334-.272.789-.266 1.224-.323.231-.031 1.113-.222 1.252-.05 0 .031.151.48-.003.478l-.013-.001.013.001c.089.008.186.05.288.106l-.575.285-.177.101c-.142.093-.27.207-.378.337-.305.369-.442.859-.373 1.333.025.168.075.332.148.485.073.153.169.295.284.42l.147.141 1.901 1.621-.887.44-.582-.153zm.51-5.666c-.029-.055.285-.084.341-.084.062.007-.162.376-.341.084zm-1.792-2.56l.09-.026-.043.114c.072.129.019.206.007.276l-.124.077c-.044.056.215.063.217.071.01.028-.312.074-.252.142.079.114.687-.162.59-.146.187-.095.024-.105-.081-.159-.036-.179-.066-.456-.177-.566l.073-.085c-.173-.249-.3.302-.3.302zm-.43.454c-.071.029-.141-.016-.072-.086l.073-.089-.007-.04.058-.072.06-.015.124-.087c.036.008.121.078.092.123l-.066.082c-.015.139-.155.138-.26.183l-.002.001.002-.001-.002.001z" /></svg>
        },
        {
            name: "gry",
            graphic: <svg width="3em" height="1.5em" viewBox="0 0 16 16" className="bi bi-controller" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.119 2.693c.904.19 1.75.495 2.235.98.407.408.779 1.05 1.094 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.815-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773a11.307 11.307 0 0 1-.739-.809c-.126-.147-.25-.291-.368-.422-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.422-.243.283-.494.576-.739.81-.398.378-.877.705-1.513.772a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772.486-.485 1.331-.79 2.235-.98.932-.196 2.03-.292 3.119-.292 1.089 0 2.187.096 3.119.292zm-6.032.979c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.505C4.861 9.97 5.978 9.026 8 9.026s3.139.943 3.965 1.855c.164.182.307.35.44.505.214.25.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                <path d="M11.5 6.026a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-7-2.5h1v3h-1v-3z" />
                <path d="M3.5 6.526h3v1h-3v-1zM3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .258.966l-1.932.518a.5.5 0 0 1-.612-.354zm9.976 0a.5.5 0 0 0-.353-.613l-1.932-.518a.5.5 0 1 0-.259.966l1.932.518a.5.5 0 0 0 .612-.354z" />
            </svg>
        }
    ]
}



const Filters = () => {

    const Icon = IconsData.Icons.map(icon => (
        <div key={icon.name} className={icon.name + "-container"}>
            <span className={icon.name}>
                <span >{icon.graphic}</span>
                <p>{icon.name}</p>
            </span>
        </div>
    ))

    return (

        <div className="filters">
            <div className="search-container">
                <input className="search" placeholder="Wyszukaj"></input>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                </svg>
            </div>
            <div className="localization-container">
                <select className="localization">
                    <option value="Warszawa">Warszawa</option>
                    <option value="Trójmiasto">Trójmiasto</option>
                </select>
            </div>
            <div className="event_type-container">
                {Icon}
            </div>
            <div className="filters-container_btn">
                <svg className="filters_logo_btn" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg>
                <button className="filters_btn">Filtry</button>

            </div>


        </div>
    );
}

export default Filters;