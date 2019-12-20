Rails.application.routes.draw do
  get '/answer' => 'main#answer'
  get '/question' => 'main#question'
  get '/greeter/:name' => 'main#greeter'
  root to: 'main#greeter'
end
