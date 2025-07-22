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

    

    // ✅ Solution Tab Switching Logic
    const solutionTabs = document.querySelectorAll(".solution-tab-btn");
    const solutionDisplay = document.getElementById("solution-code-display");

    const solutionCode = {
        c: `<pre><code>#include &lt;stdio.h&gt;
int main() {
    int N, sum = 0;
    printf("enter a number: ");
    scanf("%d", &N);
    for (int i = 2; i <= N; i += 2) {
        sum += i;
    }
    printf("%d\\n", sum);
    return 0;
}</code></pre>`,

        python: `<pre><code># Take input for N
N = int(input())
sum_even = sum(i for i in range(2, N+1, 2))
print(sum_even)</code></pre>`,

        java: `<pre><code>import java.util.Scanner;

public class SumEvenNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        scanner.close();

        int sum = 0;
        for (int i = 2; i <= N; i += 2) {
            sum += i;
        }

        System.out.println(sum);
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
    int N, sum = 0;
    
    // Take input for N
    scanf("%d", &N);
    
    // Logic for summing even numbers goes here
    // Hint: Use a loop with step 2 to sum even numbers
    
    // Output the result
    printf("%d\\n", sum);
    
    return 0;
}`,

        python: `# Take input for N
N = int(input())

# Logic for summing even numbers goes here
# Hint: Use a loop or list comprehension to sum even numbers

# Output the result
print(sum_even)`, 

        java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N, sum = 0;
        
        // Take input for N
        N = scanner.nextInt();
        
        // Logic for summing even numbers goes here
        // Hint: Use a loop with step 2 to sum even numbers
        
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
