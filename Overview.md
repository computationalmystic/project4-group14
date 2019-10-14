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
            # Methods:
            - selectCourseAssignment
            - readAssignmentInstructions
            - readAssignmentDueDate
        - View Student Submission for Assignment
            # Methods:
            - getStudentAssignment
            - checkForSubmission
            - checkForLateSubmission
            - downloadSubmission
        - Search Student
            # Methods:
            - getStudentInformation
            - findStudent
        - Collect Assignments
            # Methods:
            - getCourseAssignment
            - getSubmissions
            - downloadFile
        
    ## Instructor:
        - View Course Assignment
            # Methods:
            - selectCourseAssignment
            - readAssignmentInstructions
            - readAssignmentDueDate
        - View Student Submission for Assignment
            # Methods: 
            - getStudentAssignment
            - checkForSubmission
            - checkForLateSubmission
            - downloadSubmission
        - Search Student
            # Methods:
            - getStudentInformation
            - findStudent
        - Collect Assignments
            # Methods:
            - getCourseAssignment
            - getSubmissions
            - downloadFile
        - Create/Edit/Remove Courses
            # Methods:
            - createCourse
            - editCourse
            - removeCourse
            - setCourseInformation
        - Create/Edit/Remove Sections
            # Methods:
            - getCourseInformation
            - createSection
            - editSection
            - removeSection
            - setSectionInformation
        - Add/Remove TA from Course Section
            # Methods:
            - getCourseInformation
            - getSectionInformation
            - getTAID
            - addTA
            - removeTA
        - Create/Edit/Remove Assignment of Course
            # Methods:
            - getAssignmentInformation
            - createAssignment
            - editAssignment
            - publishAssignment
            - removeAssignment
        
    ## System Administrator:
        - Add/Edit/Remove/Disable Instructors
            # Methods:
            - getInstructorID
            - addInstructor
            - editInstructor
            - removeInstructor
            - disableInstructor


 
# Next Steps:
    1.set up information for every class
    2.set up function for every class
    3.set up connection between class
    
    The first thing we will need to do is to set up each of our classes and subclasses by including the necessary information for each class. This will include information regarding ADMINs, Instructors, Teaching Assistants, and Students. In addition, we will also need set up classes so that each course and section can be set up easily with access to assignments and submissions. Next, we will need to set up each function that be used by the classes created. In doing that, we will need to set up access controls so that only certain users will be able to use certain functions as each action cannot be done by every class. Finally, we will need to create relationships and connections between each class. This will include different relationship types (many-to-many, one-to-many, etc.) and their connections can also be severed, for example if a student is removed from a course. 
