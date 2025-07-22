document.addEventListener("DOMContentLoaded", function() {

    // Starter Code Template Logic
    const starterTabs = document.querySelectorAll(".starter-tab-btn");
    const starterCodeBlock = document.getElementById('starter-code-block');

    // Function to change the starter code based on the selected language tab
    function setStarterCode(language) {
        const starterCodeTemplates = {
            c: `
#include <stdio.h>

int main() {
    // Declare the variables
    int N;  // N is the size of the array
    int arr[N];  // Array to store the elements
    int max = 0, second_max = 0;  // Variables to store the maximum and second maximum elements

    // Enter your code logic here
    // Hint: Use a loop to find the maximum and second maximum elements in the array

    return 0;  // End of main function
}
            `,
            python: `
# Declare the variables
N = int(input("Enter the size of the array: "))  # Variable to store the size of the array
arr = list(map(int, input("Enter the elements of the array: ").split()))  # Array to store elements
max_val = second_max = float('-inf')  # Initializing max and second max to negative infinity

# Enter your code logic here
# Hint: Use a loop to find the maximum and second maximum elements in the array

# Print the result
print(f"The second maximum element in the array is {second_max}.")
            `,
            java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Declare the variables
        Scanner scanner = new Scanner(System.in);
        int N;  // N is the size of the array
        int max = Integer.MIN_VALUE, second_max = Integer.MIN_VALUE;  // Variables to store the maximum and second maximum elements

        // Enter your code logic here
        // Hint: Use a loop to find the maximum and second maximum elements in the array

        System.out.printf("The second maximum element in the array is %d.\\n", second_max);
    }
}
            `
        };

        // Set the respective template for the selected language
        starterCodeBlock.textContent = starterCodeTemplates[language];
    }

    // Event Listener for Starter Code Language Tabs
    starterTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            starterTabs.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Get the selected language and update the starter code
            const lang = this.getAttribute("data-lang");
            setStarterCode(lang);
        });
    });

    // Set default starter code (C language by default)
    setStarterCode('c');

    // Solution Code Logic
    const solutionTabs = document.querySelectorAll(".solution-tab-btn");
    const solutionCodeDisplay = document.getElementById('solution-code-display');

    // Function to change the solution code based on the selected language tab
    function setSolutionCode(language) {
        const solutionCodeTemplates = {
            c: `
#include <stdio.h>

int main() {
    int N, max, second_max;
    printf("Enter the size of the array: ");
    scanf("%d", &N);
    
    int arr[N];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
    }

    max = second_max = arr[0];  // Assume the first element is the maximum and second maximum
    for (int i = 1; i < N; i++) {
        if (arr[i] > max) {
            second_max = max;  // Update second max before max
            max = arr[i];  // Update max
        } else if (arr[i] > second_max && arr[i] < max) {
            second_max = arr[i];  // Update second max if current element is between max and second max
        }
    }

    printf("The second maximum element in the array is %d.\\n", second_max);

    return 0;
}
            `,
            python: `
N = int(input("Enter the size of the array: "))
arr = list(map(int, input("Enter the elements of the array: ").split()))
max_val = second_max = float('-inf')  # Initialize to negative infinity

for num in arr:
    if num > max_val:
        second_max = max_val  # Update second max before max
        max_val = num  # Update max
    elif num > second_max and num < max_val:
        second_max = num  # Update second max if it's between max and second max

print(f"The second maximum element in the array is {second_max}.")
            `,
            java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N, max, second_max;
        System.out.print("Enter the size of the array: ");
        N = scanner.nextInt();

        int[] arr = new int[N];
        System.out.print("Enter the elements of the array: ");
        for (int i = 0; i < N; i++) {
            arr[i] = scanner.nextInt();
        }

        max = second_max = arr[0];  // Assume the first element is the maximum and second maximum
        for (int i = 1; i < N; i++) {
            if (arr[i] > max) {
                second_max = max;  // Update second max before max
                max = arr[i];  // Update max
            } else if (arr[i] > second_max && arr[i] < max) {
                second_max = arr[i];  // Update second max if current element is between max and second max
            }
        }

        System.out.printf("The second maximum element in the array is %d.\\n", second_max);
    }
}
            `
        };

        // Set the respective solution code for the selected language
        solutionCodeDisplay.querySelector("pre").textContent = solutionCodeTemplates[language];
    }

    // Event Listener for Solution Language Tabs
    solutionTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            solutionTabs.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Get the selected language and update the solution code
            const lang = this.getAttribute("data-lang");
            setSolutionCode(lang);
        });
    });

    // Set default solution code (C language by default)
    setSolutionCode('c');

    // Function to copy the starter code to clipboard
    document.getElementById('copy-btn').addEventListener('click', function () {
        const codeText = starterCodeBlock.textContent;
        const textArea = document.createElement('textarea');
        textArea.value = codeText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        alert('Code copied to clipboard!');
    });
});
