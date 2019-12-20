# Process

## Updating the /public file
- Add a file with an .html extension in the public directory
- Navigate to the view `localhost:3000/filename`

## Creating a Controller
- $ rails g controller main
- The generate command provides the files and directories needed to create the controllers and views
  - `app/views/main` - creates a folder to store the views
  - `app/controllers/main_controller.rb` - creates a controller class for controller methods

#### Controller Methods
- Add a method to the controller class in `app/controllers/main_controller.rb`
  ```ruby
  def answer
    render html: "This is the answer."
  end
  ```
- Navigate to `localhost:3000/answer` and see an error, fix the error by providing the information for a proper request (http verb and url) by creating a route

## Creating a Route
- Add a route to the `config/routes.rb` file: `get '/answer' => 'main#answer'`
- Navigate to `localhost:3000/answer` and see the html rendered by the controller method

## Add a View
- To create more complicated views, render another page in the controller method rather than rendering html directly
- add a file to the directory `app/view/main` called `answer.html.erb`
- `erb` stands for embedded Ruby
- Update the controller:
  ```ruby
  def question
    @question = "Why did the chicken cross the road?"
    # creates an instance variable to hold the question
    render "question.html.erb"
    # render the new view file in `app/view/main`
  end
  ```
- In `app/view/main/question.html.erb` add:
```html
<p> Here is my joke: <%= @question %>! </p>
```
- This file accepts html and erb
- To pass Ruby code into the page use `<%= %>` (show the code) or `<% %>` (don't show the code)


## Add Another Flow
- Controller: Add another method to the class
  ```ruby
  def answer
    render "answer.html.erb"
  end
  ```
- Route: Add another route to `config/routes.rb` file: `get '/answer' => 'main#answer'`
- View: Add a file called `app/view/main/answer.html.erb`:
```html
<h2> The answer is: </h2>
<p> <%= @answer %> </p>
```

## Creating a Landing Page
- Modify the routes not go to Rails boilerplate page at `localhost:3000`
- In `in config/routes.rb` add `root to: 'main#question'` and now `localhost:3000` will the question page

## Linking between pages
- Link_to takes two arguments, the first one creates the hyperlink for the user to click and the second one is the route
- Navigate to the root page: `<%= link_to "Home", "/" %>`
- `<%= link_to "Get the Answer", "/answer" %>`

## Params
- Pass more information through the url
- Add a controller method
```ruby
  def greeter
    @name = params[:name]
    # rather than hard coding a value we can get the value through the url using parameters
    render 'greeter.html.erb'
  end
```
- Add a view `app/views/greeter.html.erb`:
```html
<h1>Hello, <%= @name %>!</h1>
```
- Now greeter can be passed information to the url `localhost:3000/greeter?name=foxtrot` will render "Hello, Foxtrot!"
- To make this process better, change the route to expect a param `get '/greeter/:name' => 'main#greeter'`
- Navigate to `localhost:3000/greeter/foxtrot` 
