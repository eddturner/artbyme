require 'flickraw'
require 'json'

$props = JSON.parse(File.read("myflickr-access-info"))

FlickRaw.api_key= $props['api_key']
FlickRaw.shared_secret= $props['shared_secret']

flickr.access_token = $props['access_token']
flickr.access_secret = $props['access_secret']

# From here you are logged:
login = flickr.test.login
puts "You are now authenticated as #{login.username}"

# Get some photoset info
# peru photoset 72157655798806903
# daily life 2013 photoset 72157634983727146
list = flickr.photosets.getPhotos :photoset_id => "72157634983727146"

#puts list.inspect
#puts list.photo[0].id

# print photo ids of list
$i = 0
#$end = list.photo.size
$end = 20

largeItems = Array.new
mediumItems = Array.new
while $i < $end do
   sizes = flickr.photos.getSizes :photo_id => list.photo[$i].id
   #p sizes
   originalInfo = sizes.find {|p| p.label == 'Large'}
   mediumInfo = sizes.find {|p| p.label == 'Medium 640'}
   
   largePhotoInfo = { :w => originalInfo.width, :h => originalInfo.height, :src => FlickRaw.url_b(list.photo[$i]) }
   mediumPhotoInfo = { :w => mediumInfo.width, :h => mediumInfo.height, :src => FlickRaw.url_z(list.photo[$i]) }
   largeItems.push(largePhotoInfo)
   mediumItems.push(mediumPhotoInfo)

   $i += 1
end

$psItems = "getPsLargeItems =  function () { return #{JSON.generate(largeItems)}; };\n"
$psItems += "getPsMediumItems =  function () { return #{JSON.generate(mediumItems)}; };"
p "Writing to file: #{$psItems}"
File.write('../js/psItems.js', $psItems)

