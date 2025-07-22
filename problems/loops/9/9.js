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
    int N;
    printf("enter a number: ");
    scanf("%d", &N);
    for (int i = 10; i >= 1; i--) {
        printf("%d x %d = %d\n", N, i, N * i);
    }
    return 0;
}</code></pre>`,

        "python": `<pre><code>N = int(input())  # Read input
for i in range(10, 0, -1):
    print(f"{N} x {i} = {N * i}")</code></pre>`,

        "java": `<pre><code>import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt(); // Read input
        scanner.close();

        for (int i = 10; i >= 1; i--) {
            System.out.println(N + " x " + i + " = " + (N * i));
        }
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
    
    // Logic to print multiplication table from 10 to 1 goes here
    
    return 0;
}`,

        python: `# Take input for N
N = int(input())

# Logic to print multiplication table from 10 to 1 goes here`,

        java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N;
        
        // Take input for N
        N = scanner.nextInt();
        
        // Logic to print multiplication table from 10 to 1 goes here
        
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

function copyUserCode() {
    const userCode = document.getElementById('user-code');
    navigator.clipboard.writeText(userCode.value)
      .then(() => {
        alert('Code copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  }
  