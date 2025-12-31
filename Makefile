CXX = clang++
CXXFLAGS = -std=c++20 -I./include -I./include/webview
LDFLAGS = -framework WebKit -framework Cocoa

TARGET = webwing
SRC = main.cpp

all: $(TARGET)

$(TARGET): $(SRC)
	$(CXX) $(CXXFLAGS) $(SRC) $(LDFLAGS) -o $(TARGET)

run: all
	./$(TARGET)

clean:
	rm -f $(TARGET)
