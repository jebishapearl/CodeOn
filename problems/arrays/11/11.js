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

    // Enter your code logic here
    // Hint: Use a loop to reverse the array

    return 0;  // End of main function
}
            `,
            python: `
# Declare the variables
N = int(input("Enter the size of the array: "))  # Variable to store the size of the array
arr = list(map(int, input("Enter the elements of the array: ").split()))  # Array to store elements

# Enter your code logic here
# Hint: Use a loop to reverse the array

# Print the result
print(f"The reversed array is {arr}.")
            `,
            java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Declare the variables
        Scanner scanner = new Scanner(System.in);
        int N;  // N is the size of the array

        // Enter your code logic here
        // Hint: Use a loop to reverse the array

        System.out.println("The reversed array is: ");
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
    int N;
    printf("Enter the size of the array: ");
    scanf("%d", &N);
    
    int arr[N];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
    }

    // Reversing the array
    int temp;
    for (int i = 0; i < N / 2; i++) {
        temp = arr[i];
        arr[i] = arr[N - i - 1];
        arr[N - i - 1] = temp;
    }

    printf("The reversed array is: ");
    for (int i = 0; i < N; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}
            `,
            python: `
N = int(input("Enter the size of the array: "))
arr = list(map(int, input("Enter the elements of the array: ").split()))

# Reversing the array
arr.reverse()

# Print the reversed array
print(f"The reversed array is {arr}.")
            `,
            java: `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N;
        System.out.print("Enter the size of the array: ");
        N = scanner.nextInt();

        int[] arr = new int[N];
        System.out.print("Enter the elements of the array: ");
        for (int i = 0; i < N; i++) {
            arr[i] = scanner.nextInt();
        }

        // Reversing the array
        int temp;
        for (int i = 0; i < N / 2; i++) {
            temp = arr[i];
            arr[i] = arr[N - i - 1];
            arr[N - i - 1] = temp;
        }

        // Print the reversed array
        System.out.print("The reversed array is: ");
        for (int i = 0; i < N; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
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
