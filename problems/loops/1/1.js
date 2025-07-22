document.addEventListener("DOMContentLoaded", function () {
    // ✅ Collapsible List Logic
    const mainCategories = document.querySelectorAll('.main-category');
    
    mainCategories.forEach(category => {
        category.addEventListener('click', function () {
            const target = document.getElementById(this.getAttribute('data-target'));
            target.classList.toggle('collapse');
            this.classList.toggle('active');
        });
    });

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

int main()
{
    int N, sum = 0;
    
    // Prompt user for input
    printf("Enter a number: ");
    
    // Take input for N
    scanf("%d", &N);

    // Calculate the sum of first N numbers using a for loop
    for (int i = 1; i <= N; i++) {
        sum += i;
    }

    // Print the sum
    printf("Sum of first %d numbers is: %d\\n", N, sum);

    return 0;
}</code></pre>`
,

        "python": `<pre><code>N = int(input())  # Read input
sum_n = sum(range(1, N + 1))  # Calculate sum
print(sum_n)  # Print result
</code></pre>`,

        "java": `<pre><code>import java.util.Scanner;

public class SumNaturalNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt(); // Read input
        scanner.close();

        int sum = 0;
        for (int i = 1; i <= N; i++) {
            sum += i; // Add each number to sum
        }

        System.out.println(sum); // Print result
    }
}
</code></pre>`
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
    int N, sum ;
    
    // Take input for N
    scanf("%d", &N);
    
    // Logic for summing numbers from 1 to N goes here
    // Hint: Use a loop to calculate the sum
    
    // Output the result
    printf("%d\\n", sum);
    
    return 0;
}`,

        python: `# Take input for N
N = int(input())

# Logic for summing numbers from 1 to N goes here
# Hint: Use a loop to calculate the sum

# Output the result
print(sum)`, 

        java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N, sum = 0;
        
        // Take input for N
        N = scanner.nextInt();
        
        // Logic for summing numbers from 1 to N goes here
        // Hint: Use a loop to calculate the sum
        
        // Output the result
        System.out.println(sum);
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
