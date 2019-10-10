# Overview Todo-List Markdown

List of core objects from your to-dos (integrate you lists, identify any overlaps, smooth out overlaps [i.e., do not list login twice, make one list], submit a consolidated list.)
A short 3-5 sentence description of what your next steps would be if you were building this project as a team.

# 1. General Setup
    - Create UI
    - Create Database (PostgreSQL)
    - Create Web Server (AWS EC2 Server)
    - Login Page
    - Assignment Page
    - Submission Page
    - Course Home Page
    - Course Assignments Page
    - Course Submisison Page
    
# 2. Classes
    - System Administrator
    - Instructor
    - TA
    - Student
    - Submissions
    - Assignments
    - Course
        Subclass: 
        - Section
        
# 3. Functions
    ## All Users:
        - Login / Logout
            # Methods:
            - authenitcateUser
            - incorrectPassword
            - incorrectUsername
            - createUser
            - forgotPassword
            
    ## Students:
        - Select Assignment
            # Methods:
            - selectCourseAssignment
            - readAssignmentInstructions
            - readAssignmentDueDate
        - Submit Assignment/File
            # Methods:
            - checkDueDate
            - selectFile
            - checkFileType
            - checkFileSize
            - checkDueDate
            - previewFile
            - submitFile
            - addAnotherFile
            - verifyStudentSubmission
            
    ## Teacher Aassisstants (TA):
        - View Course Assignment
        - View Student Submission for Assignment
        - Search Student
        - Collect Assignments
        
    ## Instructor:
        - View Course Assignment
        - View Student Submission for Assignment
        - Search Student
        - Collect Assignments
        - Create/Edit/Remove Courses
        - Create/Edit/Remove Sections
        - Add/Remove TA from Course Section
        - Create/Edit/Remove Assignment of Course
        
    ## System Administrator:
        - Add/Edit/Remove/Disable Instructors
    

 
# Next Steps:
    1.set up information for every class
    2.set up function for every class
    3.set up connection between class
