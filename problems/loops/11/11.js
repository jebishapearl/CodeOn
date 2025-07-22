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
    int N, count = 0;
    printf("enter a number: ");
    scanf("%d", &N);
    
    while (N > 0) {
        count++;
        N /= 10;
    }
    
    printf("%d\\n", count);
    return 0;
}</code></pre>`,

        "python": `<pre><code>N = int(input())  # Read input
print(len(str(N)))  # Count digits using string length</code></pre>`,

        "java": `<pre><code>import java.util.Scanner;

public class CountDigits {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        scanner.close();

        int count = 0;
        while (N > 0) {
            count++;
            N /= 10;
        }

        System.out.println(count);
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
    
    // Logic to count digits goes here
    
    return 0;
}`,

        python: `# Take input for N
N = int(input())

# Logic to count digits goes here`,

        java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N;
        
        // Take input for N
        N = scanner.nextInt();
        
        // Logic to count digits goes here
        
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
