import { index, route, layout, prefix } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    ...prefix("pedro", [route("about", "routes/about.jsx")]),

    // // Nested Routes
    // layout("routes/dashboard.tsx", [
    //     route("finances", "routes/finances.tsx"),
    //     route("personal-info", "routes/personal-info.tsx"),
    // ]),
];
