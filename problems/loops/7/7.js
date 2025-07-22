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
    scanf("%d", &N);
    for (int i = 1; i <= N; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", j);
        }
        printf("\n");
    }
    return 0;
}</code></pre>`,

        "python": `<pre><code>N = int(input())
for i in range(1, N + 1):
    print(" ".join(str(j) for j in range(1, i + 1)))</code></pre>`,

        "java": `<pre><code>import java.util.Scanner;
public class NumberPyramid {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        scanner.close();
        
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
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
    
    // Logic to print number pyramid goes here
    // Hint: Use nested loops
    
    return 0;
}`,

        python: `# Take input for N
N = int(input())

# Logic to print number pyramid goes here
# Hint: Use nested loops`,

        java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N;
        
        // Take input for N
        N = scanner.nextInt();
        
        // Logic to print number pyramid goes here
        // Hint: Use nested loops
        
        scanner.close();
    }
}`
    };

    function showStarterCode(lang) {
        starterCodeBlock.textContent = starterCodeTemplates[lang];
    }

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
  