document.addEventListener("DOMContentLoaded", function () {
    // ✅ Collapsible List Logic
    document.querySelectorAll('.main-category').forEach(category => {
        category.addEventListener('click', function () {
            const target = document.getElementById(this.getAttribute('data-target'));
            target.classList.toggle('collapse');
            this.classList.toggle('active');
        });
    });

    

    // ✅ Solution Tab Switching Logic
    const solutionDisplay = document.getElementById("solution-code-display");
    const solutionCode = {
        "c": `<pre><code>#include &lt;stdio.h&gt;

int main() {
    int N, sum = 0;
    printf("enter a number: ");
    scanf("%d", &N);
    for (int i = 1; i <= N; i++) {
        sum += i * i;
    }
    printf("%d\n", sum);
    return 0;
}</code></pre>`,

        "python": `<pre><code>N = int(input())  # Read input
sum_squares = sum(i * i for i in range(1, N + 1))  # Calculate sum of squares
print(sum_squares)  # Print result
</code></pre>`,

        "java": `<pre><code>import java.util.Scanner;

public class SumSquares {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt(); // Read input
        scanner.close();

        int sum = 0;
        for (int i = 1; i <= N; i++) {
            sum += i * i; // Add square of each number to sum
        }

        System.out.println(sum); // Print result
    }
}
</code></pre>`
    };

    document.querySelectorAll(".solution-tab-btn").forEach(tab => {
        tab.addEventListener("click", function () {
            document.querySelectorAll(".solution-tab-btn").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            solutionDisplay.innerHTML = solutionCode[this.getAttribute("data-lang")];
        });
    });

    // ✅ Starter Code Tab Switching Logic
    const starterCodeBlock = document.getElementById("starter-code-block");
    const starterCodeTemplates = {
        "c": `#include <stdio.h>

int main() {
    int N, sum = 0;
    
    // Take input for N
    scanf("%d", &N);
    
    // Logic for summing squares of numbers from 1 to N goes here
    // Hint: Use a loop to calculate the sum of squares
    
    // Output the result
    printf("%d\n", sum);
    
    return 0;
}`,

        "python": `# Take input for N
N = int(input())

# Logic for summing squares of numbers from 1 to N goes here
# Hint: Use a loop to calculate the sum of squares

# Output the result
print(sum)`, 

        "java": `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N, sum = 0;
        
        // Take input for N
        N = scanner.nextInt();
        
        // Logic for summing squares of numbers from 1 to N goes here
        // Hint: Use a loop to calculate the sum of squares
        
        // Output the result
        System.out.println(sum);
        scanner.close();
    }
}`
    };

    function showStarterCode(lang) {
        starterCodeBlock.textContent = starterCodeTemplates[lang];
    }

    document.querySelectorAll(".starter-tab-btn").forEach(tab => {
        tab.addEventListener("click", function () {
            document.querySelectorAll(".starter-tab-btn").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            showStarterCode(this.getAttribute("data-lang"));
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

    // ✅ Ensure iframe is set to default C compiler
    compilerFrame.src = compilerLinks["c"];
});
