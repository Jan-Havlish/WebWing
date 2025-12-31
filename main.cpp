#include "webview/webview.h"
#include <iostream>
#include <string>
#include <filesystem>

int main() {
    try {
        webview::webview w(true, nullptr);
        w.set_title("Starter WebView App");
        w.set_size(800, 600, WEBVIEW_HINT_NONE);

        // Resolve absolute path to frontend/index.html
        std::filesystem::path html =
            std::filesystem::current_path() / "frontend" / "index.html";
        //w.navigate("file://" + html.string());

        w.navigate("http://localhost:5173"); // for faster development
        w.bind("cpp_hello", [](std::string req) -> std::string {
            std::cout << "C++ received request: " << req << std::endl;
            return "{\"status\":\"ok\",\"message\":\"Hello from C++!\",\"request\":" + req + "}";
        });

        w.run();
    } catch (const webview::exception &e) {
        std::cerr << "Webview exception: " << e.what() << std::endl;
        return 1;
    }
}
