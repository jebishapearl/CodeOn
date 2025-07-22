document.addEventListener("DOMContentLoaded", function () {
    // ✅ Compiler Tab Switching Logic
    const tabs = document.querySelectorAll(".tab-btn");
    const compilerFrame = document.getElementById("compiler-frame");

    const compilerLinks = {
        "c": "https://www.programiz.com/c-programming/online-compiler",
        "python": "https://www.programiz.com/python-programming/online-compiler",
        "java": "https://www.programiz.com/java-programming/online-compiler"
    };

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const lang = this.getAttribute("data-lang");
            compilerFrame.src = compilerLinks[lang];
        });
    });

    // ✅ Solution Tab Switching Logic
    const solutionTabs = document.querySelectorAll(".solution-tab-btn");
    const solutionDisplay = document.getElementById("solution-code-display");

    const solutionCode = {
        "c": `<pre><code>#include &lt;stdio.h&gt;
#include &lt;math.h&gt;

int main() {
    int N, sum = 0, temp, remainder, digits = 0;
    printf("enter a number: ");
    scanf("%d", &N);
    temp = N;

    while (temp != 0) {
        temp /= 10;
        digits++;
    }

    temp = N;
    while (temp != 0) {
        remainder = temp % 10;
        sum += pow(remainder, digits);
        temp /= 10;
    }

    if (sum == N)
        printf("YES\\n");
    else
        printf("NO\\n");

    return 0;
}</code></pre>`,

        "python": `<pre><code>N = int(input())
digits = len(str(N))
sum_of_powers = sum(int(digit) ** digits for digit in str(N))

if sum_of_powers == N:
    print("YES")
else:
    print("NO")</code></pre>`,

        "java": `<pre><code>import java.util.Scanner;

public class ArmstrongNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        scanner.close();

        int sum = 0, temp = N, remainder, digits = 0;

        while (temp != 0) {
            temp /= 10;
            digits++;
        }

        temp = N;
        while (temp != 0) {
            remainder = temp % 10;
            sum += Math.pow(remainder, digits);
            temp /= 10;
        }

        if (sum == N)
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
#include <math.h>

int main() {
    int N;
    
    // Take input for N
    scanf("%d", &N);
    
    // Logic to check Armstrong number goes here
    
    return 0;
}`,

        python: `# Take input for N
N = int(input())

# Logic to check Armstrong number goes here`,

        java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N;
        
        // Take input for N
        N = scanner.nextInt();
        
        // Logic to check Armstrong number goes here
        
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
