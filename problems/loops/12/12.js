document.addEventListener("DOMContentLoaded", function () {
    // ✅ Compiler Tab Switching Logic
    const tabs = document.querySelectorAll(".tab-btn");
    const compilerFrame = document.getElementById("compiler-frame");

    

    // ✅ Solution Tab Switching Logic
    const solutionTabs = document.querySelectorAll(".solution-tab-btn");
    const solutionDisplay = document.getElementById("solution-code-display");

    const solutionCode = {
        "c": `<pre><code>#include &lt;stdio.h&gt;

int main() {
    int N, reversed = 0, original, remainder;
    scanf("%d", &N);
    original = N;
    
    while (N > 0) {
        remainder = N % 10;
        reversed = reversed * 10 + remainder;
        N /= 10;
    }
    
    if (original == reversed)
        printf("YES\\n");
    else
        printf("NO\\n");
    
    return 0;
}</code></pre>`,

        "python": `<pre><code>N = int(input())  # Read input
if str(N) == str(N)[::-1]:
    print("YES")
else:
    print("NO")</code></pre>`,

        "java": `<pre><code>import java.util.Scanner;

public class PalindromeNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        scanner.close();

        int original = N, reversed = 0, remainder;

        while (N > 0) {
            remainder = N % 10;
            reversed = reversed * 10 + remainder;
            N /= 10;
        }

        if (original == reversed)
            System.out.println("YES");
        else
            System.out.println("NO");
    }
}</code></pre>`
    };

    solutionTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            solutionTabs.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const lang = this.getAttribute("data-lang");
            solutionDisplay.innerHTML = solutionCode[lang];
        });
    });

    // ✅ Starter Code Tab Switching Logic
    const starterTabs = document.querySelectorAll(".starter-tab-btn");
    const starterCodeBlock = document.getElementById("starter-code-block");

    const starterCodeTemplates = {
        c: `#include <stdio.h>

int main() {
    int N;
    
    // Take input for N
    scanf("%d", &N);
    
    // Logic to check palindrome goes here
    
    return 0;
}`,

        python: `# Take input for N
N = int(input())

# Logic to check palindrome goes here`,

        java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N;
        
        // Take input for N
        N = scanner.nextInt();
        
        // Logic to check palindrome goes here
        
        scanner.close();
    }
}`
    };

    function showStarterCode(lang) {
        starterCodeBlock.textContent = starterCodeTemplates[lang];
    }

    // ✅ Attach event listeners to starter code tabs
    starterTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            starterTabs.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const lang = this.getAttribute("data-lang");
            showStarterCode(lang);
        });
    });

    // ✅ Load default starter code (C language) on page load
    showStarterCode("c");

    // ✅ Copy Code Functionality
    document.getElementById("copy-btn").addEventListener("click", function () {
        navigator.clipboard.writeText(starterCodeBlock.textContent).then(() => {
            alert("Code copied to clipboard!");
        });
    });
});
